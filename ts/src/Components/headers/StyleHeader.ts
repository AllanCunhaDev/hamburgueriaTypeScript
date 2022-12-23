import styled from "styled-components";

export const StyleHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

width: 100%;
max-width: 1600px;
height: 80px;

margin: 0 auto;

background-color: var(--grey-0);

    & > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        width: 87%;
        margin: 0 auto;
        margin-right: 120px;
        

        
        & > div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 30%;
            
            & > .btn_cart{
                background-color:transparent;
                width: 20%;
                border: none;
                
                font-size: 30px;
                cursor: pointer;
                color: var(--grey-35);
                & > svg{
                    cursor: pointer;
                    
                }
            }
            & > .btn_logout{
                background-color: transparent;
                width: 20%;
                border: none;
                
                font-size: 30px;
                font-weight: 900;
                cursor: pointer;  
                color: var(--grey-35);
                & > svg{
                    cursor: pointer;
                    
                }
                
            }
        }
    }


`