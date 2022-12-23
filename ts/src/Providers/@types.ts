import { iLoginFormValues, iRegisterFormValues } from "../Components/forms/@types";

export interface iUserProviderProps {
    children: React.ReactNode;
}

export interface iUser {
    id: string;
    name: string;
    email: string;
}

export interface iUserLoginResponse {
    user: iUser;
    accessToken: string;
}

export interface iUserContext {
    user: iUser;
    userLogin: (formData: iLoginFormValues,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
    userRegister: (formData: iRegisterFormValues,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
    userLogout: () => void;
}

export interface iCardProducts{
    category: string;
    id: number;
    img: string;
    name:string;
    price:number | string;
    count?:number;
    [item: string | number] : any;
}


