import React, { useEffect, useState } from 'react';
import { LogoMini } from '../../components/icons/LogoMini';
import { ListElements } from '../../components/ListElements';
import { TabledInfo } from '../../components/TabledInfo';
import { getDolar } from '../../services/dolar';
import { getListDatabase } from '../../services/notion';
import { Devider, InfoContainer, Wrapper, ListsContainer } from './style';

export const Info = () => {
    const [NYTaxes,] = useState(8.88);
    const [dolar, setDolar] = useState(0);
    const [listElements, setListElements] = useState([]);

    useEffect(() => {
        const getDolarData = async () => {
            const dolarJson = await getDolar();
            setDolar(dolarJson.USDBRLT.ask);
        }

        const getListData = async () => {
            const listData = await getListDatabase();
            const listObject = {};

            listData.results.forEach((data) => {
                if (data.properties['Categoria'].select && listObject[data.properties['Categoria'].select.name]) {
                    listObject[data.properties['Categoria'].select.name].push(data);
                } else if (data.properties['Categoria'].select) {
                    listObject[data.properties['Categoria'].select.name] = [data];
                }
            })

            setListElements(listObject);
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
            <ListsContainer>
                {
                    Object.keys(listElements).map((elementCategory) => {
                        return <ListElements
                                key={elementCategory}
                                title={elementCategory}
                                elements={listElements[elementCategory]}
                            />
                    })
                }
            </ListsContainer>
        </Wrapper>
    )
}