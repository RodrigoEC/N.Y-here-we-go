import React from 'react';
import { useTheme } from '../../../context/theme';

export const Plane = ({ color }) => {
    const { theme } = useTheme();

    return (
        <svg width="23.35" height="13.76" viewBox="0 0 37 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M36.3267 19.9405C34.9534 21.7732 32.2287 22.1134 29.95 21.9712C28.0352 21.8494 11.9066 18.8878 11.1939 18.6898C7.97962 17.7878 5.63721 16.4035 4.02418 14.8855C2.3575 13.3168 1.41349 11.6668 1.21396 10.1505L0 1.69231L6.62649 3.01569L10.0605 7.69154L13.2228 8.34477L10.9693 0L18.7946 1.85308L26.2394 10.9797L29.8645 11.8428C31.8581 12.3031 33.5801 12.9478 35.1982 14.5014C36.8028 16.0431 37.6966 18.1162 36.3267 19.9405ZM30.4614 15.5032C29.7303 15.2494 25.0606 14.1815 24.2289 13.9937L16.7674 4.84L15.6239 4.56246L18.1072 12.7803L8.45582 10.7614L5.01179 6.06862L3.71734 5.74708L4.53224 9.63769C5.20797 12.5349 9.55408 14.9769 12.2033 15.4575C13.9807 15.7825 27.1096 18.1855 28.902 18.458C30.1344 18.6357 32.72 18.8202 33.6053 17.9469L33.6103 17.9435C33.161 16.8402 31.5748 15.8908 30.4614 15.5032Z" fill={color ? color : theme.primary} />
        </svg>

    )
}
