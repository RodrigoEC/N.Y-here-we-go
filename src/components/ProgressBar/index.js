import React from 'react';
import { useContent } from '../../context/elements';
import { Plane } from '../icons/Plane';
import { Container, Wrapper, Progress, ProgressNumber } from './style';

export const ProgressBar = () => {
    const { finalPrice, paidAmount } = useContent();

    const porcentage = ((paidAmount || 0) / (finalPrice || 100) * 100).toFixed(0);

    return (
        <Wrapper>
            <Container>
                <Progress porcentage={porcentage} />
                <Plane />
            </Container>
            <ProgressNumber>{porcentage}%</ProgressNumber>
        </Wrapper>
    );
};