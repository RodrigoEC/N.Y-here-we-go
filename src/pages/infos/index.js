import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contribute } from '../../components/Contribute';
import { Cross } from '../../components/icons/Cross';
import { Loading } from '../../components/icons/Loading';
import { LogoMini } from '../../components/icons/LogoMini';
import { NotionData } from '../../components/NotionData';
import { TabledInfo } from '../../components/TabledInfo';
import { getDolar } from '../../services/dolar';
import { getListDatabase, updatePage } from '../../services/notion';
import { Devider, InfoContainer, Wrapper, LoadingText, LoadingContainer, Logout } from './style';

export const Info = () => {
    const [NYTaxes,] = useState(8.88);
    const [dolar, setDolar] = useState(0);
    const [listElementsRaw, setListElementsRaw] = useState([]);
    const [listElements, setListElements] = useState({});
    const [loading, setLoading] = useState(false);
    const [finalPrice, setFinalPrice] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [failed, setFailed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('@NYHWG/login');
        localStorage.removeItem('@NYHWG/pass');
        navigate('/login');
    }

    const formatElementsList = (listData) => {
        const listObject = {};

        listData.forEach((data) => {
            if (data.properties['Categoria'].select && listObject[data.properties['Categoria'].select.name]) {
                listObject[data.properties['Categoria'].select.name].push(data);
            } else if (data.properties['Categoria'].select) {
                listObject[data.properties['Categoria'].select.name] = [data];
            }
        })

        setListElementsRaw(listData);
        setListElements(listObject);
    }

    const getListData = async (notLoad) => {
        if (!notLoad) {
            setLoading(true);
        }
        const listData = await getListDatabase();

        if (!listData) {
            setFailed(true);
        } else {
            formatElementsList(listData.results);
        }
        setLoading(false);
    }

    useEffect(() => {
        const getDolarData = async () => {
            const dolarJson = await getDolar();
            setDolar(dolarJson.USDBRLT.ask);
        }

        getListData();
        getDolarData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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


    }, [listElementsRaw, setFinalPrice, NYTaxes, dolar, listElements])

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

    const handleCheckElement = async (pageId, checkValue) => {
        const oldListElement = { ...listElementsRaw };
        const element = listElementsRaw.find(element => element.id === pageId)
        const elementIndex = listElementsRaw.indexOf(element);

        listElementsRaw[elementIndex].properties.Check.checkbox = !element.properties.Check.checkbox
        formatElementsList(listElementsRaw);

        const response = updatePage(pageId, { 'Check': { checkbox: checkValue } });
        response.then((response) => !response && formatElementsList(oldListElement));
    };

    return (
        <Wrapper>
            <LogoMini />
            <Devider />
            <InfoContainer>
                <TabledInfo title='dolar hoje' info={dolar} />
                <TabledInfo title='taxa N.Y' info={NYTaxes} />
            </InfoContainer>
            {loading ? (
                <LoadingContainer>
                    <Loading />
                    <LoadingText>Carregando dados...</LoadingText>
                </LoadingContainer>
            ) : (
                <NotionData
                    loadData={getListData}
                    failed={failed}
                    finalPrice={finalPrice}
                    paidAmount={paidAmount}
                    elements={listElements}
                    handleCheckElement={handleCheckElement}
                />
            )}
            <Contribute />
            <Logout onClick={handleLogout} >Sair</Logout>
        </Wrapper>
    )
}