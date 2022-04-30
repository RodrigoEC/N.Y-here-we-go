import React from 'react';
import { useTheme } from '../../../context/theme';

export const Close = (props) => {
    const { theme } = useTheme();

    return (
        <svg {...props} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 8.42155L17.4215 0L18 0.578455L9.57845 9L18 17.4215L17.4215 18L9 9.57845L0.578455 18L0 17.4215L8.42155 9L0 0.578455L0.578455 0L9 8.42155Z" fill={theme.secondary} />
        </svg>

    )
}
