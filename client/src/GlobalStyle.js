import { createGlobalStyle } from 'styled-components';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const GlobalStyle = createGlobalStyle`
body {
        background-color: #F9F9F9;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        overscroll-behavior: none;
    }
`;

export default GlobalStyle;
