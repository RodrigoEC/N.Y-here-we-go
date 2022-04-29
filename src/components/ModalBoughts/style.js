import styled from 'styled-components'
import { Modal as AntdModal } from 'antd';

export const BackContainer = styled.div``;

export const Modal = styled(AntdModal)`
    .ant-modal-footer {
        padding: 0 1.5rem 1rem;
    }

    .ant-modal-content {
        max-width: 400px;
        margin: 0 auto;

    }
    label, input, .ant-select-selector, .ant-select-arrow {
        color: ${({ theme }) => theme.font};
    }

    input, select, .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        background: ${({ theme }) => theme.primary} !important;
    }

    .ant-modal-header,
    .ant-modal-body,
    .ant-modal-title,
    .ant-modal-footer {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.font};
        border: 0;
    }

    .ant-modal-footer {
        display: flex;
        gap: 1rem;
        justify-content: end;
    }
`;

export const Cancel = styled.p`
    color: ${({ theme }) => theme.font};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;
export const Submit = styled.p`
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    color: $BackContainer
    `;