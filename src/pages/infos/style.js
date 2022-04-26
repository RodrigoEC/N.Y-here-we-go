import styled from 'styled-components'

export const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 3rem 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    color: ${({ theme }) => theme.font};
`;

export const Devider = styled.div`
    width: 50px;
    height: 2px;
    background: #505050;
    margin: 2rem 0;
`;

export const InfoContainer = styled.div`
    display: flex;
    gap: 3rem;
`;

export const ListsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 4rem;
    padding: 3rem 2rem;
    margin: 0 auto;
`;