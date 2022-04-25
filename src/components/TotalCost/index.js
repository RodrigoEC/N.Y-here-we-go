import React from 'react';
import { Wrapper, TotalValue, Subtitle } from './style';

export const TotalCost = ({ dolar, taxes, elements }) => {
    const finalPrice = elements.reduce((final, element) => {
        const elementPrice = element.properties['Preço'].number
        if (!elementPrice) { 
            return final;
        };

        if (element.properties['Moeda'].select.name === 'Dolar') {
            return (elementPrice * (100 + taxes) / 100) * dolar + final;
        }

        return elementPrice + final;
    }, 0);

    return (
        <Wrapper>
            <Subtitle>Valor total em real</Subtitle>
            <TotalValue>R${finalPrice.toFixed(2)}</TotalValue>
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

