import React, { useState } from 'react';
import { useContent } from '../../context/elements';
import { updatePage } from '../../services/notion';
import { Checked } from '../icons/Checked';
import { Edit } from '../icons/Edit';
import { Wrapper, Description, DescriptionContainer, Price, PriceContainer } from './style';

export const ListElement = ({ element }) => {
    const [checked, setChecked] = useState(element.properties['Check'].checkbox);
    const { listElementsRaw, formatElementsList, handleModalElement } = useContent();

    const title = element.properties['Compra'].title;
    const description = title.length > 0 ? title[0].text.content : 'missing title';

    const coinRepresentative = element.properties['Moeda'].select && element.properties['Moeda'].select.name === 'Dolar' ? 'U$' : 'R$';
    const formatedPrice = (Math.round(element.properties['Preço'].number * 100) / 100).toFixed(2);

    const handleCheck = async () => {
        setChecked(previous => !previous);

        const elementIndex = listElementsRaw.indexOf(element);
        listElementsRaw[elementIndex].properties.Check.checkbox = !element.properties.Check.checkbox
        formatElementsList(listElementsRaw);

        const response = updatePage(element.id, { 'Check': { checkbox: element.properties.Check.checkbox } });
        response.then((response) => (!response || response.status !== 200) && setChecked(previous => !previous));
    };

    return (
        <Wrapper>
            <Checked id='checkbox' checked={checked} onClick={handleCheck} />
            <DescriptionContainer>
                <PriceContainer>
                    <Edit id='edit' onClick={() => handleModalElement(element)}/>
                    <Description checked={checked}>{description}</Description>
                </PriceContainer>
                <Price checked={checked}>{coinRepresentative}{formatedPrice}</Price>
            </DescriptionContainer>
        </Wrapper>
    )
};