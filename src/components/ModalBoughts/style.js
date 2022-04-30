import styled from 'styled-components'
import { LogoMini } from '../icons/LogoMini';
import { Plane } from '../icons/Plane';
import { ReloadMini } from '../icons/ReloadMini';

export const BackContainer = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    right: 0;
    background: #00000060;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    width: 100%;
    max-width: 400px;
    background: ${({ theme }) => theme.primary};
    padding: 2rem 1rem;
    margin: 0 1rem;
    border-radius: 8px;


    label, input, .ant-select-selector, .ant-select-arrow {
        color: ${({ theme }) => theme.font};
    }

    input, select, .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        background: ${({ theme }) => theme.primary} !important;
    }

    form .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
        background-color: ${({ theme }) => theme.primary} !important;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    
    & #close-tab {
        cursor: pointer;
        transition 0.3s;
        transform: scale(1.05);
    }

    & #close-tab:hover {
        opacity: 0.7;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Icon = styled(Plane)`
`;

export const Title = styled.h2`
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
`;

export const Cancel = styled.p`
    color: ${({ theme }) => theme.font};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;
export const Submit = styled.button`
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    color: ${({ theme }) => theme.font};
    background: transparent;
    box-shadow: none;
    border: none;

    &:hover {
        opacity: 0.7;
    }

    &.disabled {
        opacity: 0.4;
    }

    &.disabled:hover {
        opacity: 0.4;
        cursor: not-allowed;
    }

`;

export const Reloading = styled(ReloadMini)`
    color: ${({ theme }) => theme.third} !important;
    animation: rotates 2s linear infinite;
    width: 18px;

    @keyframes rotates {
        0% {transform: rotate(0deg)};
        50% {transform: rotate(180deg)};
        100% {transform: rotate(360deg)};
    }
`;

export const SubmitContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
        opacity: 0.7;
    }
`;