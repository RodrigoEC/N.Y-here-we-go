import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html, body {
    background: ${({ theme }) => theme.primary}
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Roboto', sans-serif !important;
    color: ${({ theme }) => theme.secondary};
	transition: 0.3s background, fill;
}

.ant-select-item-option-active:not(.ant-select-item-option-disabled),
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
	background-color: ${({ theme }) => theme.third};
}

html .ant-select-dropdown-empty, .ant-select-dropdown {
	background: ${({ theme }) => theme.primary};
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;