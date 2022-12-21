import styled from "styled-components";

export const InputStyle = styled.fieldset`
    width: 90%;
    height: 50px;
    margin-bottom: 30px;
    border: none;
    
    

    & > label {
        display: block;

        font-style: normal;
        font-weight: 400;
        font-size: 12px;

        color: var(--grey-35);
    }
    & > input{
        display: block;

        width: 100%;
        height: 50px;

        padding: 0 10px;

        border-radius: 8px;
        border:none;
        background-color: var(--grey-0);

        color: var(--color_primary);
        
      
    }
    & >   input:focus{
            outline-color: var(--grey-35);
            background-color: var(--grey-0);
           
        }

`
