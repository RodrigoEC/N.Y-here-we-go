import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contribute } from '../../components/Contribute';
import { Loading } from '../../components/icons/Loading';
import { LogoMini } from '../../components/icons/LogoMini';
import { ListElements } from '../../components/ListElements';
import { ProgressBar } from '../../components/ProgressBar';
import { TabledInfo } from '../../components/TabledInfo';
import { TotalCost } from '../../components/TotalCost';
import { getDolar } from '../../services/dolar';
import { getListDatabase } from '../../services/notion';
import { Devider, InfoContainer, Wrapper, ListsContainer } from './style';

export const Info = () => {
    const [NYTaxes,] = useState(8.88);
    const [dolar, setDolar] = useState(0);
    const [listElementsRaw, setListElementsRaw] = useState([]);
    const [listElements, setListElements] = useState({});
    const [loading, setLoading] = useState(true);
    const [finalPrice, setFinalPrice] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

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

            setListElementsRaw(listData.results);
            setListElements(listObject);
            setLoading(false);
        }

        getListData();
        getDolarData();
    }, [])

    useEffect(() => {
        const finalPrice = listElementsRaw.reduce((final, element) => {
            const elementPrice = element.properties['Preço'].number
            if (!elementPrice) {
                return final;
            };

            if (element.properties['Moeda'].select.name === 'Dolar') {
                return (elementPrice * (100 + NYTaxes) / 100) * dolar + final;
            }

            return elementPrice + final;
        }, 0);
        setFinalPrice(finalPrice);

        const paidAmout = listElementsRaw.reduce((final, element) => {
            const elementPrice = element.properties['Preço'].number
            if (!elementPrice || !element.properties['Check'].checkbox) {
                return final;
            };

            if (element.properties['Moeda'].select.name === 'Dolar') {
                return (elementPrice * (100 + NYTaxes) / 100) * dolar + final;
            }

            return elementPrice + final;
        }, 0);
        setPaidAmount(paidAmout);
        

    }, [listElementsRaw, setFinalPrice, NYTaxes, dolar])

    useEffect(() => {
        const login = localStorage.getItem('@NYHWG/login');
        const loginEnv = process.env.REACT_APP_LOGIN;
        const password = localStorage.getItem('@NYHWG/pass');
        const passEnv = process.env.REACT_APP_PASS;

        if (!login || !password || login !== loginEnv || password !== passEnv) {
            navigate('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <Wrapper>
            <LogoMini />
            <Devider />
            <InfoContainer>
                <TabledInfo title='dolar hoje' info={dolar} />
                <TabledInfo title='taxa N.Y' info={NYTaxes} />
            </InfoContainer>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <ProgressBar finalPrice={finalPrice} paidAmount={paidAmount} />
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
                    <TotalCost
                        finalPrice={finalPrice}
                    />
                </>
            )}
            <Contribute />
        </Wrapper>
    )
}