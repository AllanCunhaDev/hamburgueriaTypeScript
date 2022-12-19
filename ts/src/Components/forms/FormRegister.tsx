import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../inputs/Input";
import { Button } from "../buttons/Button";
import { Form } from "./Styleforms";
import { Link } from "react-router-dom";
import { schemaRegister } from "../../Schema/schemaRegister";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { SubmitHandler } from "react-hook-form/dist/types";

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const FormsRegister = () => {
  const { userRegister, loading, setLoading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({ resolver: yupResolver(schemaRegister) });

  const submit: SubmitHandler<iRegisterFormValues> = async (data) => {
    await userRegister(data, setLoading);
    reset({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit(submit)} noValidate>
      <div>
        <p className="NameHeader">
          Cadastro
          <Link to={"/"}>Retornar para o login</Link>
        </p>
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
      {/* <p>{errors.name.message}</p> */}
      <Input
        placeholder={"Digite seu Email"}
        label="Email"
        id={""}
        type={"email"}
        register={register("email")}
        disabled={loading}
        error={"errors.email"}
      />
      {/* <p>{errors.email.message}</p> */}
      <Input
        placeholder={"Digete uma senha"}
        label="Senha"
        id={""}
        type={"password"}
        register={register("password")}
        disabled={loading}
        error={"errors.password"}
      />
      {/* <p>{errors.password.message}</p> */}
      <Input
        placeholder={"Confirmar senha"}
        label="Confirmar senha"
        id={""}
        type={"password"}
        register={register("confirm_password")}
        disabled={loading}
        error={"errors.confirm_password"}
      />
      {/* <p>{errors.confirm_password.message}</p> */}

      <Button className={"btn_register"} type={"submit"} text={"Cadastrar"}></Button>
    </Form>
  );
};
