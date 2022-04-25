import React from 'react';
import { Wrapper, Title, Info } from './style';

export const TabledInfo = ({ title, info }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Info>{info}</Info>
        </Wrapper>
    )
}

TabledInfo.defaultProps = {
    title: 'missing title',
    info: '--'
}