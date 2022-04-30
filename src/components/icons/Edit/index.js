import React from 'react';
import { useTheme } from '../../../context/theme';

export const Edit = (props) => {
    const { theme } = useTheme();

    return (
        <svg {...props} style={{ cursor: 'pointer' }} width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4742 8.26917L5.93917 18.8017L0 20L1.19833 14.06L11.7325 3.52667L16.4742 8.26917V8.26917ZM17.6525 7.09083L20 4.74083L15.2575 0L12.9108 2.3475L17.6525 7.09083V7.09083Z" fill={theme.font} />
        </svg>


    )
}
