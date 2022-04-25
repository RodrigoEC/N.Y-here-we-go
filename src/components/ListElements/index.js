import React from 'react';
import { ListElement } from '../ListElement';
import { Wrapper, Title } from './style';

export const ListElements = ({ title, elements }) => {


    return (elements &&
        <Wrapper>
            <Title>{title}</Title>
            {elements.map((element) => <ListElement
                key={element.id}
                element={element.properties}
            />)}
        </Wrapper>
    )
}

ListElements.defaultProps = {
    elements: [],
    title: 'Missing Title'
}

