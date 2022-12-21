import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../inputs/Input";
import { schemaLogin } from "../../Schema/schemaLogin";
import { Form } from "./Styleforms";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import { Buttons } from "../buttons/Stylebuttons";
import { iLoginFormValues } from "./@types";

export const FormsLogin = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormValues>({ resolver: yupResolver(schemaLogin) });

  const submit: SubmitHandler<iLoginFormValues>  = async(formData) => {
    await userLogin(formData, setLoading);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submit)} noValidate>
      <div>
        <p className="NameHeader">Login</p>
      </div>
      <Input
        placeholder={"Digite seu nome completo!"}
        label="Email"
        id={"email"}
        type={"email"}
        register={register("email")}
        disabled={loading}
        error={errors.email}
        />
      <Input
        placeholder={"Digite sua Senha"}
        label="Senha"
        id={"password"}
        type={"password"}
        register={register("password")}
        disabled={loading}
        error={errors.password}
      />
      <Buttons disabled={loading} type={"submit"}>{loading? "Entrando" : "Logar"}</Buttons>
      <p className="Description">
        Crien sua conta para saborear muitas delicias e matar sua fome!
      </p>
      <Link to={"/register"}> Cadastrar </Link>
    </Form>
  );
};
