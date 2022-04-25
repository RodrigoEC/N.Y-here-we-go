import React from 'react';
import { Checked } from '../icons/Checked';
import { Wrapper, Description } from './style';

export const ListElement = ({ isChecked, description, price, coinType }) => {
    const coinRepresentative = coinType === 'dolar' ? 'U$' : 'R$';
    const formatedPrice = (Math.round(price * 100) / 100).toFixed(2);

    return (
        <Wrapper>
            <Checked checked={isChecked} />
            <Description checked={isChecked}>{description} - <strong>{coinRepresentative}{formatedPrice}</strong></Description>
        </Wrapper>
    )
}

ListElement.defaultProps = {
    isChecked: false,
    description: 'missing title',
    price: 0,
    coinType: 'dolar',
}

