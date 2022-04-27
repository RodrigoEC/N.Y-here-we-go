import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: #505050;
    gap: .75rem;
    margin-left: .5rem;
`;

export const Description = styled.p`
    letter-spacing: 2px;
    font-size: 14px;

    strong {
        font-weight: ${({ checked }) => checked ? '' : 'bold'};;
    }

    text-decoration: ${({ checked }) => checked ? 'line-through' : ''};
    color: ${({ checked }) => checked ? '#A8A8A8' : ''};
`;

export const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    @media (max-width: 550px) {
        justify-content: space-between;
    }
`;

export const Price = styled.p`
    font-weight: ${({ checked }) => checked ? '' : 'bold'};
    color: ${({ checked }) => checked ? '#A8A8A8' : ''};

    @media (min-width: 551px) {
        text-decoration: ${({ checked }) => checked ? 'line-through' : ''};
        &::before {
            content: ' - ';
        }
    }

`;