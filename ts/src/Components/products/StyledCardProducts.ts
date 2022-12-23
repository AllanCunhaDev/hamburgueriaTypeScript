import styled from "styled-components";

export const DivContainer = styled.div`
    width: 100%;

    max-width: 1600px;
    margin: 0 auto;
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    
    @media screen and (max-width:580px) {
        flex-direction: column; 
        align-items: center;
        margin: 0;
    }
    & > h1{
        font-weight: 700;
        font-size: 30px;

        margin-top: 50px;
    }
    & > ul{
        width: 90%;
        margin: 0 auto;

        display: flex;
        flex-wrap: wrap;
        align-self: center;

        gap: 56px;

        
        & > li{
            width: 300px;
            height: 340px;

            background-color: var(--pure-withe);
            border-radius: 5px;
            border: 2px solid var(--grey-20);

            & > .div_img{
            width: 100%;
            height: 150px;
            align-items: center;
        
            border-radius: 5px;

            background-color: var(--grey-0);
            border-radius: 5px 5px 0px 0px;

            display: flex;
            justify-content: center;
            align-items: center;
                & > img{
                    width: 162px;
                    height: 162px;
                }
            }

            & > .div_descr{
                display: flex;
                flex-direction: column;

                padding: 20px;
                gap: 15px;

                & > .name{
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;

                    color: var(--grey-100);
                }
                & > .category{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;

                    color: var(--grey-50);
                }
                & > .price{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;

                    color: var(--color_primary);
                }
                & > button{
                    width: 30%;
                    height: 30px;
                    margin-top: 15px;

                    color: var(--grey-0);
                    font-weight: 700;
                    border-radius: 8px;
                    background-color: var(--grey-4);
                    border: 2px solid var(--grey-4);
                }
                & > button:hover{
                    background-color: var(--color_primary);
                    border: 2px solid var(--color_primary);
                }
            }

        }

        & > li:hover{
            border: 2px solid var(--color_primary);
        }
        
    }

`