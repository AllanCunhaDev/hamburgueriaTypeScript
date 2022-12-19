import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
html, body {
    width: 100vw;
    height: 100vh;
    font-family: 'Inter', sans-serif;
    background-color: var(--grey_4);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: default;
    /* border: 1px solid #000; */
}
button{
    cursor: pointer;
}


:root{
    --font-family-1: font-family: 'Inter', sans-serif;
    --color_primary: #27AE60;
    --hover_buttons: #219653;
    --color_primary-50:#93D7AF;
    --color_secondary:#EB5757;
    --grey-100: #333333;
    --grey-50:  #828282;
    --grey-35: #999999;
    --grey-20: #E0E0E0;
    --grey-0:  #F5F5F5;
    --pallete_negative:#E60000;
    --pallete_warning: #FFCD07;
    --pallete_success:  #168821;
    --pallete_information: #155BCB;
  }

`