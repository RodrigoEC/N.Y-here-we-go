import React, { useEffect, useState } from 'react';
import { Checked } from '../../components/icons/Checked';
import { LogoMini } from '../../components/icons/LogoMini';
import { ListElement } from '../../components/ListElement';
import { TabledInfo } from '../../components/TabledInfo';
import { getDolar } from '../../services/dolar';
import { getListDatabase } from '../../services/notion';
import { Devider, InfoContainer, Wrapper } from './style';

export const Info = () => {
    const [NYTaxes, ] = useState(8.88); 
    const [dolar, setDolar] = useState(0);
    const [listElements, setListElements] = useState([]);

    useEffect(() => {
        const getDolarData = async () => {
            const dolarJson = await getDolar();
            setDolar(dolarJson.USDBRLT.ask);
        }

        const getListData = async () => {
            const listData = await getListDatabase();
            setListElements(listData);

        }

        getListData();
        getDolarData();
    }, [])

    return (
        <Wrapper>
            <LogoMini />
            <Devider />
            <InfoContainer>
                <TabledInfo title='dolar hoje' info={dolar} />
                <TabledInfo title='taxa N.Y' info={NYTaxes} />
            </InfoContainer>
            <ListElement />
        </Wrapper>
    )
}