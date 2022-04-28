import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contribute } from '../../components/Contribute';
import { Loading } from '../../components/icons/Loading';
import { LogoMini } from '../../components/icons/LogoMini';
import { NotionData } from '../../components/NotionData';
import { TabledInfo } from '../../components/TabledInfo';
import { getDolar } from '../../services/dolar';
import { createPage, getListDatabase, removePage } from '../../services/notion';
import { Devider, InfoContainer, Wrapper, Logout } from './style';

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

    const getListData = async () => {
        setLoading(true);
        const listData = await getListDatabase();

        if (!listData) {
            setFailed(true);
        } else {
            const listObject = {};
            
            listData.results.forEach((data) => {
                if (data.properties['Categoria'].select && listObject[data.properties['Categoria'].select.name]) {
                    listObject[data.properties['Categoria'].select.name].push(data);
                } else if (data.properties['Categoria'].select) {
                    listObject[data.properties['Categoria'].select.name] = [data];
                }
            })
            console.log(listData)
            setListElementsRaw(listData.results);
            setListElements(listObject);
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

    const handleAddElement = async () => {
        setLoading(true);
        console.log(listElementsRaw);
        const response = await removePage(listElementsRaw[0].id);
        if (response) {
            getListData();
        }
    }

    return (
        <Wrapper>
            <LogoMini />
            <Devider />
            <p onClick={handleAddElement}>CUUUUUUUU</p>
            <InfoContainer>
                <TabledInfo title='dolar hoje' info={dolar}/>
                <TabledInfo title='taxa N.Y' info={NYTaxes} />
            </InfoContainer>
            {loading ? (
                <Loading />
            ) : (
                <NotionData 
                    loadData={getListData}
                    failed={failed}
                    finalPrice={finalPrice}
                    paidAmount={paidAmount}
                    elements={listElements}
                />
            )}
            <Contribute />
            <Logout onClick={handleLogout} >Sair</Logout>
        </Wrapper>
    )
}