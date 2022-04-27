import { Input, Button as antButton} from 'antd';
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    gap: 1.5rem;

    .ant-form-item-label {
        padding: 0;
        color: #505050;
    }

    input, ant-input-password {
        width: 15rem;
        border-radius: 4px;
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
    background: ${({ theme }) => theme.primary};

    input {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.secondary};
    }

    svg {
        fill: ${({ theme }) => theme.secondary};
    }

    &:-webkit-autofill, &:autofill {
        background: ${({ theme }) => theme.primary};
    }
`;

export const LoginInput = styled(Input)`
    width: 15rem;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};

    &:-webkit-autofill, &:autofill {
        background: ${({ theme }) => theme.primary};
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    label {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 6px;
    }
`;

export const Button = styled(antButton)`
    background: linear-gradient(103.16deg, ${({ theme }) => theme.red} 0.35%, ${({ theme }) => theme.blue} 94.15%);
    border: none;
    padding: .75rem 2rem;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    height: fit-content;

    span {
        color: white !important;
    }

    &:hover, &:focus {
        background: linear-gradient(103.16deg, ${({ theme }) => theme.red} 0.45%, ${({ theme }) => theme.blue} 94.15%);
        transition: 0.5s;
        transform: scale(1.01);
    }
`;
