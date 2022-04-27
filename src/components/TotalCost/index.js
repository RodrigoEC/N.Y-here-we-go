import React from 'react';
import { Notion } from '../icons/Notion';
import { Wrapper, TotalValue, Subtitle, SubtitleContainer } from './style';

export const TotalCost = ({ finalPrice, paidAmount }) => {
    const porcent = paidAmount / finalPrice * 100

    return (
        <Wrapper>
            <SubtitleContainer>
                <Subtitle>Valor total em real</Subtitle>
                <a href={process.env.REACT_APP_NOTION_PAGE} target='_blank' rel='noreferrer'>
                    <Notion />
                </a>
            </SubtitleContainer>
            <TotalValue porcent={porcent} ><strong>R${paidAmount.toFixed(2)} /</strong> R${finalPrice.toFixed(2)}</TotalValue>
        </Wrapper>
    )
}

TotalCost.defaultProps = {
    finalPrice: 1,
    paidAmount: 1,
}

