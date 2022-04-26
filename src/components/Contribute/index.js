import React from 'react';
import { Github } from '../icons/Github';
import { Wrapper, Title } from './style';

export const Contribute = () => {
    return (
        <Wrapper>
            <Title>contribute with us</Title>
            <a href='https://github.com/RodrigoEC/N.Y-here-we-go' target='_blank' rel='noreferrer'>
                <Github />
            </a>
        </Wrapper>
    )
}


