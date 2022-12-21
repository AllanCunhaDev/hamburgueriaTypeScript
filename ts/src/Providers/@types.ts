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
    token: string;
}

export interface iUserContext {
    user: iUser;
    userLogin: (formData: iLoginFormValues,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
    userRegister: (formData: iRegisterFormValues,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
    userLogout: () => void;
}   