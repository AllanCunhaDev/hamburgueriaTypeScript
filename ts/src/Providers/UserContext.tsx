import React, { useState, createContext} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../Api/api";
import { iLoginFormValues } from "../Components/forms/@types";
import { iRegisterFormValues } from "../Components/forms/FormRegister";
import { iUser, iUserContext, iUserLoginResponse, iUserProviderProps } from "./@types";


export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {

  const [user, setUser] = useState({}as iUser);
  const navigate = useNavigate();

  const userLogin = async (
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const response = await Api.post<iUserLoginResponse>("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@HAMBURGUERIA2.0", response.data.accessToken);
      toast.success("Login efetuado! Bem vindo!")
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado no login!")
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await Api.post<iUser>("/users", formData);
      setUser(response.data)
      toast.success("Registro Feito com Sucesso! =)")
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu erroado no registro =(")
    } finally {
      setLoading(false);
    }
  };

  const userLogout = ()=>{
    localStorage.removeItem("@HAMBURGUERIA2.0");
    toast.info("Volte Sempre! =)")
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{ user, userLogin, userRegister, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
