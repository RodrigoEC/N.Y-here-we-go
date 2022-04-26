import React from 'react';
import { Notion } from '../icons/Notion';
import { Wrapper, TotalValue, Subtitle, SubtitleContainer } from './style';

export const TotalCost = ({ finalPrice }) => {

    return (
        <Wrapper>
            <SubtitleContainer>
                <Subtitle>Valor total em real</Subtitle>
                <a href={process.env.REACT_APP_NOTION_PAGE} target='_blank' rel='noreferrer'>
                    <Notion />
                </a>
            </SubtitleContainer>
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

