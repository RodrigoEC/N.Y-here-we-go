import React from 'react';

export const Checked = ({ checked }) => {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="20" height="20" rx="3.5" stroke="#505050" strokeWidth="3" />
            {checked && (<rect x="4" y="4" width="15" height="15" rx="1" fill="#505050" />)}
        </svg>
    )
}

Checked.defaultProps = {
    checked: false,
}