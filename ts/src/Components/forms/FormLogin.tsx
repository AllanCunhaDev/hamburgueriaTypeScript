import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../inputs/Input";
import { Button } from "../buttons/Button";
import { schemaLogin } from "../../Schema/schemaLogin";
import { Form } from "./Styleforms";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

export const FormsLogin = () => {
  const { userLogin, loading, setLoading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaLogin) });

  const submit = (elem: any) => {
    userLogin(elem, setLoading(true));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submit)} noValidate>
      <div>
        <p className="NameHeader">Login</p>
      </div>
      <Input
        placeholder={"Digite seu nome"}
        label="Nome"
        id={""}
        type={"text"}
        register={register("name")}
        disabled={loading}
        error={"errors.name"}
      />
      {/* <p>{errors.name?.message}</p> */}
      <Input
        placeholder={"Digite sua Senha"}
        label="Senha"
        id={""}
        type={"password"}
        register={register("password")}
        disabled={loading}
        error={"errors.password"}
      />
      {/* <p>{errors.password?.message}</p> */}
      <Button type={"button"} text="Logar" />
      <p className="Description">
        Crien sua conta para saborear muitas delicias e matar sua fome!
      </p>
      <Link to={"/register"}> Cadastrar </Link>
    </Form>
  );
};
