import React, { useEffect, useState } from 'react';
import { LogoMini } from '../../components/icons/LogoMini';
import { TabledInfo } from '../../components/TabledInfo';
import { getDolar } from '../../services/dolar';
import { Devider, InfoContainer, Wrapper } from './style';

export const Info = () => {
    const [dolar, setDolar] = useState(0);
    const [NYTaxes, setNYTaxes] = useState(8.88);

    useEffect(() => {
        const getData = async () => {
            const dolarJson = await getDolar();
            console.log(dolarJson)
            setDolar(dolarJson.USDBRLT.ask);
        }

        getData();
    }, [])
    return (
        <Wrapper>
            <LogoMini />
            <Devider />
            <InfoContainer>
                <TabledInfo title='dolar hoje' info={dolar} />
                <TabledInfo title='taxa N.Y' info={NYTaxes} />
            </InfoContainer>

        </Wrapper>
    )
}