import styled from "styled-components";

export const DivHeaderCart = styled.div`
width: 500px;
height: 50px;

display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 20px;


background-color: var(--color_primary);
border-radius: 5px 5px 0 0;

    & > p{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;

        color: var(--pure-withe);
    }
    & > button {
        background-color: transparent;
        color: var(--grey-0);

        font-weight: 700;
        font-size: 18px;

        border: none;   
    }
`

export const DivInterCart = styled.div`
width: 500px;
max-height: 400px;
padding: 20px;
overflow-x:auto ;

background-color: var(--pure-withe);
    & > .div_img{
        width:100%;
        & > img{
            width:100%;
        }

    }

    & > li{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        & > img{
            width: 80px;
            height: 80px;

            background-color: var(--grey-20);
            border-radius: 5px;
        }
        & > .div_name{
            height: 100%;

            margin-right: 190px;
            gap: 30px;
            
            display: flex;
            flex-direction: column;
            
            & > p{
                font-style: normal;
                font-weight: 700;
                font-size: 18px;

                color: var(--grey-100);
            }
        }
        & > .div_btn{
            display: flex;
            align-items: flex-start;
            justify-content: center;

            & > button{
                background-color: transparent;
                border: none;

                font-size: 15px;
                color: var(--grey-35);
            }
        }
        
    }

`
export const DivTotal = styled.div`
width: 500px;
height: 100px;
padding: 20px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

border-top: 2px solid var(--grey-35);
border-radius: 0 0 5px 5px;
background-color: var(--pure-withe);

    & > .div_total{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
    }
    & > .div_btn_remove{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        
        & > button{
            width: 90%;
            height: 30px;
            margin: 0 auto;

            border: none;
            border-radius: 5px;
            background-color: var(--grey-20);
            color: var(--grey-35);
        }
        & > button:hover{
            background-color: var(--grey-35);
            color: var(--pure-withe);
        }
    }
`