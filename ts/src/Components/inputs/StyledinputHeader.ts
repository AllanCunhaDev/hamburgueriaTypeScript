import styled from "styled-components";

export const DivSearch = styled.div`
width: 80%;

display: flex;
align-items: center;
height: 50px;
padding: 0 10px;


border-radius: 8px;
border: 2px solid var(--grey-20);
background-color:var(--pure-withe);

    & > input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: var(--pure-withe);
    color: var(--color_primary);
     
    }   

& > button{
        width: 45px;
        height: 35px;

        background-color: var(--color_primary);
        color: var(--grey-0);
        border-radius: 8px;
        border:none;

        display: flex;
        align-items: center;
        justify-content: center;

        

    }   
`