import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../inputs/Input";
import { Form } from "./Styleforms";
import { Link } from "react-router-dom";
import { schemaRegister } from "../../Schema/schemaRegister";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Buttons } from "../buttons/Stylebuttons";
import { iRegisterFormValues } from "./@types";



export const FormsRegister = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({ resolver: yupResolver(schemaRegister) });
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterFormValues> = async (formData) => {
    await userRegister(formData, setLoading);
    reset();
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
        id={"text"}
        type={"text"}
        register={register("name")}
        disabled={loading}
        error={errors.name}
      />
      <Input
        placeholder={"Digite seu Email"}
        label="Email"
        id={"email"}
        type={"email"}
        register={register("email")}
        disabled={loading}
        {...errors.email}
      />
      <Input
        placeholder={"Digete uma senha"}
        label="Senha"
        id={"senha"}
        type={"password"}
        register={register("password")}
        disabled={loading}
        {...errors.password}
      />
      <Input
        placeholder={"Confirmar senha"}
        label="Confirmar senha"
        id={"confirmar"}
        type={"password"}
        register={register("confirm_password")}
        disabled={loading}
        {...errors.confirm_password}
      />
      <Buttons className={"btn_register"} type={"submit"}>
        Cadastrar
      </Buttons>
    </Form>
    
  );
};




export type { iRegisterFormValues };

