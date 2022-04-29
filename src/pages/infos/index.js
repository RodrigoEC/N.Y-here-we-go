import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contribute } from '../../components/Contribute';
import { Loading } from '../../components/icons/Loading';
import { LogoMini } from '../../components/icons/LogoMini';
import { ModalBoughts } from '../../components/ModalBoughts';
import { NotionData } from '../../components/NotionData';
import { TabledInfo } from '../../components/TabledInfo';
import { useContent } from '../../context/elements';
import { 
    Devider, 
    InfoContainer, 
    Wrapper, 
    LoadingText,
     LoadingContainer,
     Logout 
    } from './style';

export const Info = () => {
    const { 
        dolar, 
        NYTaxes,
        loading,
        activeModal,
    } = useContent();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('@NYHWG/login');
        localStorage.removeItem('@NYHWG/pass');
        navigate('/login');
    }

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
        <>
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
                    <NotionData />
                )}
                <Contribute />
                <Logout onClick={handleLogout}>Sair</Logout>
            </Wrapper>
            {
                activeModal && (
                    <ModalBoughts />
                )
            }
        </>
    )
}