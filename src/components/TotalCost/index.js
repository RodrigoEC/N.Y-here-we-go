import React from 'react';
import { Wrapper, TotalValue, Subtitle } from './style';

export const TotalCost = ({ elements }) => {

    return (
        <Wrapper>
            <Subtitle>Valor total em real</Subtitle>
            <TotalValue>R$15000,00</TotalValue>
        </Wrapper>
    )
}

TotalCost.defaultProps = {
    element: {
        Compra: {
            title: {
                text: {
                    content: 'missing title',
                }
            }
        },
        Moeda: {
            select: {
                name: 'Dolar',
            }
        },
        Preço: {
            number: 0,
        },
        Check: {
            checkbox: false,
        }
    },
}

