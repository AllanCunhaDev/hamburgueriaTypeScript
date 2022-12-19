import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../Api/api";
import { iRegisterFormValues } from "../Components/forms/FormRegister";

export const UserContext = createContext({});

interface iUserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userLogin = async (data: any) => {
    try {
      const response = await Api.post("/login", data);
      localStorage.setItem("@HAMBURGUERIA2.0", response.data.token);
      setUser(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: iRegisterFormValues, setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      const response = await Api.post("/users", formData);
      console.log(response)
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <UserContext.Provider
      value={{ user, setUser, loading, setLoading, userLogin, userRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};
