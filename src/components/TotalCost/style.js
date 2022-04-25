import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #505050;
    gap: .75rem;
    flex-grow: 1;
    justify-content: end;
`;

export const Subtitle = styled.p`
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bolder;
    color: black;
`;

export const TotalValue = styled.span`
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.08em;

    background: linear-gradient(92.29deg, #DB0000 12.19%, #2F5CFF 88.88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;
