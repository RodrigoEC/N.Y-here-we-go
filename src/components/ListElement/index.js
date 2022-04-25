import React from 'react';
import { Checked } from '../icons/Checked';
import { Wrapper, Description, DescriptionContainer, Price } from './style';

export const ListElement = ({ element }) => {
    const description = element['Compra'].title.length > 0 ?
        element['Compra'].title[0].text.content :
        'missing title';

    const coinRepresentative = element['Moeda'].select && element['Moeda'].select.name === 'Dolar' ? 'U$' : 'R$';
    const formatedPrice = (Math.round(element['Preço'].number * 100) / 100).toFixed(2);

    return (
        <Wrapper>
            <Checked checked={element.Check.checkbox} />
            <DescriptionContainer>

                <Description checked={element.Check.checkbox}>{description}</Description>
                <Price checked={element.Check.checkbox}>{coinRepresentative}{formatedPrice}</Price>
            </DescriptionContainer>
        </Wrapper>
    )
}

ListElement.defaultProps = {
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

