import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 2rem;
    padding: 0 2rem;
    box-sizing: border-box;
    gap: 1rem;

    @media (max-width: 550px) {
        gap: 0.5rem;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    height: 1.25rem;
    border-radius: 100px;
    background: linear-gradient(90.12deg, ${({ theme }) => theme.red} -22.25%, ${({ theme }) => theme.blue} 105.36%);
    box-sizing: border-box;
    flex-grow: 1;

`;

export const Progress = styled.div`
    width: ${({ porcentage }) => `${porcentage}%`};
    border: 2px solid ${({ theme }) => theme.primary};
    transition: 0.3s;
`;

export const ProgressNumber = styled.span`
    padding: 0;
    font-weight: bold;
`;