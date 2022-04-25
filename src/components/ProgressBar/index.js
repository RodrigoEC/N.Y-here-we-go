import React from 'react';
import { Plane } from '../icons/Plane';
import { Container, Wrapper, Progress, ProgressNumber } from './style';

export const ProgressBar = ({ finalPrice, paidAmount }) => {
    const porcentage = (paidAmount / finalPrice * 100).toFixed(0);

    return (
        <Wrapper>
            <Container>
                <Progress porcentage={porcentage} />
                <Plane />
            </Container>
            <ProgressNumber>{porcentage}%</ProgressNumber>
        </Wrapper>
    )
}

ProgressBar.defaultProps = {
    finalPrice: 1,
    paidAmount: 1,
}

