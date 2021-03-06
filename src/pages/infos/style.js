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
    background: ${({ theme }) => theme.secondary};
    margin: 2rem 0;
`;

export const InfoContainer = styled.div`
    display: flex;
    gap: 3rem;
`;

export const Logout = styled.span`
    color: ${({ theme }) => theme.red};
    margin-top: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        opacity: 0.25;
    }
`;

export const LoadingContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
`;

export const LoadingText = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: end;
    gap: 1rem;

    & #add-cross, & #reload {
        transition: 0.3s;
        cursor: pointer;
    }

    & #add-cross:hover, & #reload:hover {
        transform: scale(1.05);
        opacity: 0.3;
    }
`;

export const ContentWrapper = styled.div`
    flex-grow: 1;
    width: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;