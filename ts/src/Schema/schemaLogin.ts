import * as yup from "yup";

export const schemaLogin = yup.object().shape({
    email: yup.string().required("O Email é obrigatório!"),
    password: yup.string().required("A senha é obrigatória!"),

})