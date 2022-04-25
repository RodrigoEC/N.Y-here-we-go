import React from 'react';
import { Wrapper, Title, Info } from './style';

export const TabledInfo = ({ title, info }) => {
    const formatedInfo = (Math.round(info * 100) / 100).toFixed(2);

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Info>{formatedInfo}</Info>
        </Wrapper>
    )
}

TabledInfo.defaultProps = {
    title: 'missing title',
    info: '--'
}

