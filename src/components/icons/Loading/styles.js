import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 11;

    @keyframes opacity {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .first, .second, .third {
        animation: opacity 2s linear infinite;
    }

    .first {
        animation-delay: 0s;
    }

    .second {
        animation-delay: 0.25s;
    }

    .third {
        animation-delay: 0.5s;
    }
`;