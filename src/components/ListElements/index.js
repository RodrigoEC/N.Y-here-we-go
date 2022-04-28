import React from 'react';
import { ListElement } from '../ListElement';
import { Wrapper, Title, InfoContainer } from './style';

export const ListElements = ({ title, elements, onCheck }) => {
    return (elements &&
        <Wrapper>
            <Title>{title}</Title>
            <InfoContainer>
                {elements.map((element) => <ListElement
                    onCheck={onCheck}
                    key={element.id}
                    element={element.properties}
                    pageId={element.id}
                />)}
            </InfoContainer>
        </Wrapper>
    )
}

ListElements.defaultProps = {
    elements: [],
    title: 'Missing Title'
}

