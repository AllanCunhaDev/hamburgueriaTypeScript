import styled from "styled-components";

export const InputStyle = styled.fieldset`
    width: 80%;
    height: 50px;

    margin: 10px;
    border: none;

    & > label {
        
        font-style: normal;
        font-weight: 400;
        font-size: 12px;

        color: var(--grey-35);
    }
    & > input{
        width: 100%;
        height: 100%;

        padding: 5px;

        border-radius: 8px;
        border:none;
        background-color: var(--grey-0);


     
    }

`