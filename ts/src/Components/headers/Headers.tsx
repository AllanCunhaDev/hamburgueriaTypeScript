import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { MdOutlineLogout } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

import img1 from "../img/Logo.svg";
import { StyleHeader } from "./StyleHeader";

import { InputHeader } from "../inputs/InputHeader";


export const Header = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <StyleHeader>
      <div>
        <img src={img1} alt="logo" />
        <div>
          <InputHeader type={"text"} placeholder={"Digite sua pesquisa!"} />
          <button className="btn_cart">
            <FaShoppingCart />
          </button>
          <button className="btn_logout" onClick={userLogout}>
            <MdOutlineLogout />
          </button>
        </div>
      </div>
    </StyleHeader>
  );
};
