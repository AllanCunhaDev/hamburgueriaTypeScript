
export interface iLoginFormValues{
    name: string;
    email: string;
    password: string;
}

export interface iRegisterFormValues {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    error?: string;
}
