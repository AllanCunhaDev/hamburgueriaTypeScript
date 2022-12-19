import * as yup from "yup";

export const schemaRegister = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório!")
        .min(3, "O nome precisa ter pelo menos 3 caracteres")
        .max(200, "."),
    email: yup.string().required("O email é obrigatório!"),
    password: yup
        .string()
        .required("A senha é obrigatória!")
        .matches(/(?=.*?[A-Z])/, "É nescessário pelo menos uma letra maiúscula!")
        .matches(/(?=.*?[a-z])/, "É nescessário pelo menos uma letra minúscula!")
        .matches(/(?=.*?[0-9])/, "É nescessário pelo menos um número!")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É nescessário pelo menos um caractere especial!"),
    confirm_password: yup.string().required(),
})