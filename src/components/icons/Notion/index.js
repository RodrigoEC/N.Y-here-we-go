import React from 'react';
import { useTheme } from '../../../context/theme';

export const Notion = () => {
    const { theme } = useTheme();

    return (
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.29368 4.2077C5.00698 4.81417 5.27457 4.7679 6.61406 4.67437L19.2418 3.88088C19.5096 3.88088 19.2869 3.60127 19.1976 3.55481L17.1004 1.9682C16.6986 1.64171 16.1632 1.26782 15.1371 1.36135L2.90962 2.29465C2.46368 2.34092 2.37462 2.57425 2.5522 2.76127L4.29368 4.2077ZM5.05183 7.28743V21.1918C5.05183 21.939 5.40866 22.2186 6.21179 22.1724L20.0897 21.332C20.8932 21.2858 20.9828 20.7718 20.9828 20.1648V6.35371C20.9828 5.74766 20.76 5.42084 20.2681 5.46749L5.76554 6.35371C5.23031 6.40078 5.05183 6.68095 5.05183 7.28743ZM18.7521 8.03328C18.841 8.45364 18.7521 8.87361 18.3496 8.92087L17.681 9.0603V19.3254C17.1004 19.6519 16.5651 19.8386 16.1189 19.8386C15.4047 19.8386 15.2258 19.6051 14.6908 18.9056L10.317 11.72V18.6723L11.701 18.9991C11.701 18.9991 11.701 19.8386 10.5844 19.8386L7.50602 20.0255C7.4166 19.8386 7.50602 19.3724 7.81828 19.279L8.62159 19.046V9.85374L7.50625 9.76021C7.41678 9.33986 7.63957 8.73376 8.26476 8.68674L11.5671 8.45378L16.1189 15.7329V9.29359L14.9584 9.15421C14.8693 8.64032 15.2258 8.26718 15.6721 8.22091L18.7521 8.03328ZM1.88298 1.03491L14.6015 0.0547288C16.1634 -0.0854521 16.5652 0.00845814 17.5469 0.754689L21.6068 3.74089C22.2767 4.2544 22.5 4.3942 22.5 4.95398V21.332C22.5 22.3585 22.1427 22.9655 20.8935 23.0584L6.12341 23.9918C5.18565 24.0385 4.73935 23.8987 4.24825 23.2451L1.25847 19.1856C0.722789 18.4383 0.5 17.8793 0.5 17.2253V2.66741C0.5 1.82802 0.857418 1.12783 1.88298 1.03491Z" fill={theme.font} />
        </svg>

    )
}
