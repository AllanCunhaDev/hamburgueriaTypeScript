import { useContext } from "react";
import { CartContext } from "../../Providers/CartContext";
import img1 from "../img/CartVoid.svg";
import { DivHeaderCart, DivInterCart, DivTotal } from "./StyleCart";
import { FiTrash2 } from "react-icons/fi";

export const Cart = () => {
  const { cart, setModal, removeToCart } = useContext(CartContext);

  return (
    <>
      <DivHeaderCart>
        <p> Carrinho de Compras</p>
        <button onClick={() => setModal(false)}>X</button>
      </DivHeaderCart>
      <DivInterCart>
        {cart.length === 0 ? (
          <div className="div_img">
            <img src={img1} alt="Cart" />
          </div>
        ) : (
          cart.map((item: any) => (
            <li>
              <img src={item.img} alt="Prod" />
              <div className="div_name">
                <p>{item.name}</p>
                <span>Count 1</span>
              </div>
              <div className="div_btn">
                <button onClick={() => removeToCart(item)}>
                  <FiTrash2 />
                </button>
              </div>
            </li>
          ))
        )}
      </DivInterCart>
      <DivTotal>
        <div className="div_total">
        <p>Valor Total : </p>
        <span>0.00</span>
        </div>
        <div className="div_btn_remove">
          <button>Remover Tudo</button>
        </div>
      </DivTotal>
    </>
  );
};
