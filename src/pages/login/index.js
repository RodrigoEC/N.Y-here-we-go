import React, { useRef } from 'react';
import { LogoBig } from '../../components/icons/LogoBig';
import { Form } from 'antd';
import { Wrapper, Button, LoginInput, PassInput } from './style';

export const Login = ({ checked }) => {
    const loginRef = useRef();

    return (
        <Wrapper>
            <LogoBig />
            <Form layout="vertical">
                <Form.Item name='login' label='Login'>
                    <LoginInput />
                </Form.Item>
                <Form.Item name='pass' label='Password'>
                    <PassInput />
                </Form.Item>
                <Button>Entrar</Button>
            </Form>
        </Wrapper>
    )
}

Login.defaultProps = {
    checked: false,
}