import React from 'react';
import { LogoMini } from '../../components/icons/LogoMini';
import { TabledInfo } from '../../components/TabledInfo';
import { Devider, InfoContainer, Wrapper } from './style';

export const Info = () => {
    return (
        <Wrapper>
            <LogoMini />
            <Devider />
            <InfoContainer>
                <TabledInfo />
                <TabledInfo />
            </InfoContainer>
        </Wrapper>
    )
}