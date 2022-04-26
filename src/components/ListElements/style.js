import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 550px) {
        width: 100%;
        align-items: center;
    }
`;

export const Title = styled.p`
    letter-spacing: 2px;
    font-size: 24px;
    color: ${({ theme }) => theme.purple};
    font-weight: bolder;


    @media (max-width: 550px) {
        &::before {
            content: '~ ';
        }
        
        &::after {
            content: ' ~';
        }
    }
`;

export const Info = styled.span`
    letter-spacing: 2px;
    font-size: 32px;
    font-weight: bolder;
`;

export const InfoContainer = styled.span`
    display: flex;
    align-items: left;
    flex-direction: column;
    color: #505050;
    gap: 1rem;

    @media (max-width: 550px) {
        width: 100%;
        align-items: left;
    }
`;
