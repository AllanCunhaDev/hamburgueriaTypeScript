import { Route, Routes } from "react-router-dom";
import {LoginPage} from "../Pages/login/LoginPage"
import {RegisterPage} from "../Pages/register/RegisterPage";
import {Dashboard}  from "../Pages/dashboard/Dashboard";


export const RoutesImport = () => {
    return (
        <Routes>
            <Route path ="/" element = {< LoginPage />} />
            <Route path = "/register" element = {< RegisterPage />} />
            <Route path = "/dashboard" element = {< Dashboard />} />
        </Routes>
    )

}