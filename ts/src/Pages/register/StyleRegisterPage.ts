import styled from "styled-components";

export const ContainerRegister = styled.div`
width: 100%;
max-width: 1600px;
min-height: 100%;
margin: 0 auto;
gap: 60px;
padding-top: 120px;


display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: center;

    & > div{
        display: flex;
        flex-direction: column;
        width: 20%;

        & > .logo{
            width: 243px;
            height: 56px;

            margin-bottom: 20px;
        }
        & > div{
            width: 100%;
            height: 95px;
            border: 1px solid var(--grey-20);
            box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            & > p{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;

                width: 100%;
                height: 100%;
                padding: 10px;

                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                color: var(--grey-50);

                & > div{
                width: 75px;
                height: 50px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: rgba(39, 174, 96, 0.1);
                border: 1px solid rgba(39, 174, 96, 0.1);
                border-radius: 5px;

                & > svg{
                    width: 20px;
                    height: 20px;
                    color: var(--color_primary);
                }
                }
            }
           
        }
        & > .boleans{
            width: 180px;
            height: 79px;

            margin-top: 30px;
        }
    }

`