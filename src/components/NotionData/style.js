import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const ListsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 4rem;
    margin: 0 auto;
`;

export const FailedWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Title = styled.p`
    font-size: 14px;
    text-align: center;
    line-height: 1.25;
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