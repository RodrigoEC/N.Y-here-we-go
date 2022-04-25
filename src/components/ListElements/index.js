import React from 'react';
import { ListElement } from '../ListElement';
import { Wrapper, Title, InfoContainer, TitleContainer } from './style';

export const ListElements = ({ title, elements }) => {


    return (elements &&
        <Wrapper>
            <Title>{title}</Title>
            <InfoContainer>
                {elements.map((element) => <ListElement
                    key={element.id}
                    element={element.properties}
                />)}
            </InfoContainer>
        </Wrapper>
    )
}

ListElements.defaultProps = {
    elements: [],
    title: 'Missing Title'
}
