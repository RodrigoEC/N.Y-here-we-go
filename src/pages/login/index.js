import React, { useEffect, useState } from 'react';
import { LogoBig } from '../../components/icons/LogoBig';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wrapper, Button, LoginInput, PassInput, InputContainer } from './style';

export const Login = () => {
    const [loginState, setLoginState] = useState('');
    const [passState, setPassState] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const onFinish = () => {
        localStorage.setItem('@NYHWG/login', loginState);
        localStorage.setItem('@NYHWG/pass', passState);

        navigate('/');
    }

    useEffect(() => {
        const login = localStorage.getItem('@NYHWG/login');
        const loginEnv = process.env.REACT_APP_LOGIN;
        const password = localStorage.getItem('@NYHWG/pass');
        const passEnv = process.env.REACT_APP_PASS;

        if (login && password && login === loginEnv && password === passEnv) {
            navigate('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);


    return (
        <Wrapper>
            <LogoBig />
            <InputContainer>
                <label>Login</label>
                <LoginInput placeholder='Rodrigo' onChange={(e) => setLoginState(e.target.value)} />
            </InputContainer>
            <InputContainer>
                <label>Senha</label>
                <PassInput placeholder='*****' onChange={(e) => setPassState(e.target.value)} />
            </InputContainer>
            <Button onClick={onFinish} >Entrar</Button>
        </Wrapper>
    )
}

Login.defaultProps = {
    checked: false,
}