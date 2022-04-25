import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: #505050;
    gap: .75rem;
`;

export const Description = styled.p`
    letter-spacing: 2px;
    font-size: 16px;

    strong {
        font-weight: ${({ checked }) => checked ? '' : 'bold'};;
    }

    text-decoration: ${({ checked }) => checked ? 'line-through' : ''};
    color: ${({ checked }) => checked ? '#A8A8A8' : ''};
`;
