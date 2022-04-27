import React from 'react';
import { useTheme } from '../../../context/theme';

export const Reload = () => {
    const { theme } = useTheme();

    return (
        <svg style={{ cursor: 'pointer' }} width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="71" height="71" rx="35.5" fill="#DEDEDE" fillOpacity="0.3" />
            <g clipPath="url(#clip0_46_279)">
                <path fillRule="evenodd" clipRule="evenodd" d="M28.1217 40.4387L23.1257 49.092L14.4724 44.096L15.1861 42.8598L21.6143 46.5712C17.6991 41.2565 17.0552 33.9127 20.5646 27.8343C25.2915 19.647 35.7762 16.8376 43.9635 21.5646C52.1508 26.2915 54.9601 36.7762 50.2332 44.9635C45.7468 52.7342 36.073 55.6606 28.0997 51.8962L28.8163 50.6551C36.1038 54.0285 44.9045 51.3381 48.997 44.2498C53.33 36.7448 50.7547 27.1337 43.2497 22.8008C35.7448 18.4678 26.1337 21.0431 21.8008 28.548C18.4749 34.3087 19.2192 41.31 23.1392 46.2137L26.8855 39.725L28.1217 40.4387V40.4387Z" fill={theme.reload} />
            </g>
            <defs>
                <clipPath id="clip0_46_279">
                    <rect width="34.2583" height="34.2583" fill='white' transform="translate(12 42.6686) rotate(-60)" />
                </clipPath>
            </defs>
        </svg>

    )
}