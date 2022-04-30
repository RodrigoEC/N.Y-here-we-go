import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contribute } from '../../components/Contribute';
import { Cross } from '../../components/icons/Cross';
import { Loading } from '../../components/icons/Loading';
import { LogoMini } from '../../components/icons/LogoMini';
import { ReloadMini } from '../../components/icons/ReloadMini';
import { ModalBoughts } from '../../components/ModalBoughts';
import { NotionData } from '../../components/NotionData';
import { ProgressBar } from '../../components/ProgressBar';
import { TabledInfo } from '../../components/TabledInfo';
import { TotalCost } from '../../components/TotalCost';
import { useContent } from '../../context/elements';
import {
    Devider,
    InfoContainer,
    Wrapper,
    LoadingText,
    LoadingContainer,
    Logout,
    Menu,
    ContentWrapper,
} from './style';

export const Info = () => {
    const {
        dolar,
        NYTaxes,
        loading,
        activeModal,
        setActiveModal,
        getListData,
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
                <ContentWrapper>
                    <ProgressBar />
                    <Menu>
                        <ReloadMini id='reload' onClick={getListData} />
                        <Cross id='add-cross' onClick={() => setActiveModal(previous => !previous)} />
                    </Menu>

                    {loading ? (
                        <LoadingContainer>
                            <Loading />
                            <LoadingText>Carregando dados...</LoadingText>
                        </LoadingContainer>
                    ) : (
                        <NotionData />
                    )}
                    <TotalCost />
                </ContentWrapper>
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