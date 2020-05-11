import { createGlobalStyle } from 'styled-components';
import space from "../assets/space.jpg"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=VT323');

    body {
        color: lightgreen;
        background: #000;
        font-size: 25px;
        font-family: 'VT323', monospace;
        text-align: justify;
        text-justify: inter-word;
        margin: 25px;
    }

    p {
        color: #000;
        display: inline;
    }

    a {
        color: white;
        font-size: 30px;
        text-decoration: underline;
    }
    a:hover {
        cursor:pointer;
        color: #80caee;
    }

    h3 {
        position: fixed;
        bottom: 15px;
        left: 15px;
        margin: 25px;
    }
`;
