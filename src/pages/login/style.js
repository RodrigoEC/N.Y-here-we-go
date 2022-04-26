import { Input } from 'antd';
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;

    .ant-form-item-label {
        padding: 0;
        font-weight: bold;
    }

    input, ant-input-password {
        width: 15rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }
`;

export const PassInput = styled(Input.Password)`
    width: 15rem;
`;

export const LoginInput = styled(Input)`
    width: 15rem;
`;

export const Button = styled.button`
    background: linear-gradient(103.16deg, #DB0000 0.35%, #2F5CFF 94.15%);
    border: none;
    padding: .75rem 2rem;
    border-radius: 8px;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;
