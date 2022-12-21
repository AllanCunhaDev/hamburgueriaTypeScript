import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      localStorage.setItem("@HAMBURGUERIA2.0", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
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
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@HAMBURGUERIA2.0");
    if (token) {
      (async () => {
        try {
          const response = await Api.get<iUser>("/products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          localStorage.removeItem("@HAMBURGUERIA2.0");
          console.log("error");
        }
      })();
    }
  }, []);

  const userLogout = ()=>{
    localStorage.removeItem("@HAMBURGUERIA2.0");
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
