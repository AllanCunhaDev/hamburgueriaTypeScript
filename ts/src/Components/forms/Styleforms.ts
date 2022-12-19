import styled from "styled-components";

export const Form = styled.form`
width: 500px;
height: 461px;

padding: 20px;


display: flex;
flex-direction: column;
align-items: center;

border: 2px solid var(--grey-0);
box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
border-radius: 5px;
    & > div{
        width: 100%;
        margin: 12px;

        & > .NameHeader{
        width: 80%;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        

        color: var(--grey-100);

        & > a{
            font-style: normal;
            font-weight: 500;
            font-size: 14px;

            text-decoration-line: underline;

            color: var(--grey-50);

            cursor: pointer;
        }
        }
    

    }


    & > .Description{
        width: 80%;
        height: 50px;

        margin: 20px;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        text-align: center;

        color: var(--grey-35) ;
    }
    & > a{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 80%;
        height: 50px;
        margin: 2px;

        background-color: var(--grey-0);
        border-radius: 8px;
        border: none;
        text-decoration: none;

        font-style: normal;
        font-weight: 600;
        font-size: 16px;
       

        color: var(--grey-35);

        cursor: pointer;

        :hover{
            color: var(--grey-0);
            background-color: var(--grey-50);
        }

    }

    & > .btn_register{
        margin-top: 20px;
    }

`