import { Buttons } from "./Stylebuttons";

interface IButton{
    type: string;
    text: string;
    className: string;
}

export const Button = ({text,type, className}:IButton) =>{
    return (
        <Buttons className={className} type={type}>{text}</Buttons>

    )
}