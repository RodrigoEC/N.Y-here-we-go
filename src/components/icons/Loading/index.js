import React from 'react';
import { Container } from './styles';


export const Loading = ({ colors }) => {
    return (
        <Container>
            <svg width="130" height="66" viewBox="0 0 97 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M68.4706 49H11.4403V43.2353H68.4706V49ZM61.7781 33.9628C59.4427 37.0844 54.809 37.6637 50.9338 37.4216C47.6773 37.2141 20.2486 32.1699 19.0367 31.8327C13.5704 30.2964 9.5868 27.9386 6.84364 25.3532C4.00923 22.6812 2.40383 19.8709 2.0645 17.2884L0 2.88235L11.2692 5.13635L17.1091 13.1003L22.4871 14.2129L18.6546 0L31.9626 3.15618L44.6234 18.7007L50.7883 20.1707C54.1788 20.9547 57.1073 22.0529 59.859 24.6989C62.5879 27.3247 64.1078 30.8556 61.7781 33.9628V33.9628ZM51.8035 26.4052C50.5602 25.9729 42.6188 24.1541 41.2044 23.8342L28.5152 8.24353L26.5704 7.77082L30.7935 21.7675L14.3802 18.3289L8.52318 10.3361L6.32181 9.78847L7.70765 16.415C8.85681 21.3496 16.2479 25.5088 20.7533 26.3274C23.7759 26.8808 46.1033 30.9738 49.1516 31.4378C51.2474 31.7405 55.6445 32.0546 57.1501 30.5674L57.1586 30.5616C56.3944 28.6823 53.6969 27.0653 51.8035 26.4052V26.4052Z" fill="url(#paint0_linear_27_14)" />
                <rect className='first' x="72.2745" y="43.2727" width="5.70588" height="5.72727" fill="url(#paint1_linear_27_14)" />
                <rect className='second' x="81.7843" y="43.2727" width="5.70588" height="5.72727" fill="url(#paint2_linear_27_14)" />
                <rect className='third' x="91.2941" y="43.2727" width="5.70588" height="5.72727" fill="url(#paint3_linear_27_14)" />
                <defs>
                    <linearGradient id="paint0_linear_27_14" x1="-12" y1="4.38622e-07" x2="83" y2="57" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DB0000" />
                        <stop offset="1" stop-color="#2F5CFF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_27_14" x1="66" y1="39.5" x2="78" y2="48.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DB0000" />
                        <stop offset="1" stop-color="#2F5CFF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_27_14" x1="73.5" y1="40" x2="87.5" y2="50" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DB0000" />
                        <stop offset="1" stop-color="#2F5CFF" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_27_14" x1="83.5" y1="42.5" x2="94.1471" y2="49" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DB0000" />
                        <stop offset="1" stop-color="#2F5CFF" />
                    </linearGradient>
                </defs>
            </svg>
        </Container>

    )
}

Loading.defaultProps = {
    colors: {
        first: "#DB0000",
        second: "#2F5CFF",
    }
}