import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        font-family: sans-serif;
        background-color: #1e1f26;
    }

    * {
        box-sizing: border-box;
    }

`;
export default GlobalStyle;
