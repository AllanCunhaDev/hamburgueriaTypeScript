import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { MdOutlineLogout } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Loading from "../img/Logo.svg";
import { StyleHeader } from "./StyleHeader";
import { InputHeader } from "../inputs/InputHeader";
import { CartContext } from "../../Providers/CartContext";

export const Header = () => {
  const { userLogout } = useContext(UserContext);
  const { modal, setModal } = useContext(CartContext);
  return (
    <StyleHeader>
      <div>
        <img src={Loading} alt="logo" />
        <div>
          <InputHeader type={"text"} placeholder={"Digite sua pesquisa!"} />

          <button onClick={() => setModal(true)} className="btn_cart">
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
