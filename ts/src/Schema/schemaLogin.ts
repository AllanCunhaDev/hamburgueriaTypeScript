import * as yup from "yup";

export const schemaLogin = yup.object().shape({
    name: yup.string().required("O nome completo é obrigatório!"),
    password: yup.string().required("A senha é obrigatória!"),

})