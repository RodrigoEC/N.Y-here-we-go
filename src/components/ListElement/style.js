import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: #505050;
    gap: .75rem;
    margin-left: .5rem;

    & #checkbox {
        transition: 0.3s;
    }
    
    & #checkbox:hover {
        transform: scale(1.05);
        opacity: 0.8;
    }
`;

export const Description = styled.p`
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 1.25;

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

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    #edit {
        transition: 0.3s;
    }

    #edit:hover {
        opacity: 0.3;
    }
`;