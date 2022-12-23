import { useContext } from "react";
import { Header } from "../../Components/headers/Headers";
import { ModalCart } from "../../Components/modals/ModalCart";
import { CardsProducts } from "../../Components/products/Cardproducts";
import { CartContext } from "../../Providers/CartContext";

export const Dashboard = () => {
  const {modal} = useContext(CartContext)
  return (
    <>
      <Header/>
      <CardsProducts/>
      { modal? <ModalCart/> : <></>}
    </>
  );
};
