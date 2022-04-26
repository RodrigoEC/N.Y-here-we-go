import React from 'react';
import { useTheme } from '../../../context/theme';

export const Checked = ({ checked }) => {
    const { theme } = useTheme();

    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="20" height="20" rx="3.5" stroke={theme.secondary} strokeWidth="3" />
            {checked && (<rect x="5" y="5" width="13" height="13" rx="1" fill={theme.secondary} />)}
        </svg>
    )
}

Checked.defaultProps = {
    checked: false,
}