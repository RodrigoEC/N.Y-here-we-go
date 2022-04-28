import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;
    flex-grow: 1;
    justify-content: end;
`;

export const Subtitle = styled.p`
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bolder;
`;

export const TotalValue = styled.span`
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.08em;

    background: linear-gradient(92.29deg, ${({ theme }) => theme.red} 12.19%, ${({ theme }) => theme.blue} 88.88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;

    strong {
        font-size: ${({ porcent }) => porcent > 50 ? `${porcent}%` : '50%'};
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;
