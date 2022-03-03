// This is the browser reset code.

import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
/* This for the variables that'll be used for the project. Just like CSS */

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500;700&display=swap');


& body {
    font-family:'Roboto', sans-serif;
}

:root {
--Navbar-bg-color: #363940;
--bg-slider-1: url(/images/slider-bg.jpg);
}

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    text-decoration:none;
   
}

`

export default GlobalStyle;