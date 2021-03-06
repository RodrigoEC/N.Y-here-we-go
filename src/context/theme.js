import React, { createContext, useContext, useState, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'


const colors = {
    black: '#282E31',
    darkerBlack: '#373F44',
    white: '#FDFDFD',
    fontBlack: '#505050',
    fontWhite: '#E2E2E2',
    red: '#FF3F3F',
    lightRed: '#FF8181',
    blue: '#4961B7',
    lightBlue: '#93AAFF',
    purple: '#71399D',
    darkPurple: '#E1B6E1',
    lightGrey: '#7E7E7E',
    darkerWhite: '#D9D7D7',
}

const ThemeContext = createContext()

const themeLight= {
    primary: colors.white,
    secondary: colors.black,
    third: colors.darkerWhite,
    red: colors.red,
    blue: colors.blue,
    purple: colors.purple,
    font: colors.fontBlack,
    reload: colors.lightGrey,
}

const themeDark = {
    primary: colors.black,
    secondary: colors.white,
    third: colors.darkerBlack,
    red: colors.lightRed,
    blue: colors.lightBlue,
    font: colors.fontWhite,
    purple: colors.darkPurple,
    reload: colors.darkerWhite,
}

const themes = {
    light: themeLight,
    dark: themeDark,
} 

export default function ThemesProvider({ children }) {
    const getTheme = () => {
        let theme = localStorage.getItem('@NYHWG/theme')
        if (!theme) {
            localStorage.setItem('@NYHWG/theme', 'dark')
            theme = 'dark'
        }
        return theme
    }

    const getIsActive = useCallback(() => {
        const isActive = localStorage.getItem('@NYHWG/active')
        if (!isActive) {
            localStorage.setItem('@NYHWG/active', false)
            return false
        }

        return isActive === 'true'
    },[])

    const currentTheme = getTheme()
    const isCurrentlyActive = getIsActive()

    const [isActive, setIsActive] = useState(isCurrentlyActive)
    const [theme, setTheme] = useState(themes[currentTheme])
    
    const handleSwitch = useCallback(() => {
        const currentTheme = getTheme()
        const isCurrentlyActive = getIsActive()

        const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

        localStorage.setItem('@NYHWG/active', !isCurrentlyActive)
        localStorage.setItem('@NYHWG/theme', nextTheme)
        setIsActive(!isCurrentlyActive)
        setTheme(themes[nextTheme])
        
    }, [setTheme, setIsActive, getIsActive])
    
    const value = {
        isActive,
        setIsActive,
        handleSwitch,
        theme,
    }

    return theme  && (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    return { ...context };
}