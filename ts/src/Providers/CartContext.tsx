import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iCardProducts, iUserProviderProps } from "./@types";

export const CartContext = createContext({});

export const CartProvider = ({ children }: iUserProviderProps) => {
  const [cart, setCart] = useState<iCardProducts[] | []>([]);
  const [modal, setModal] = useState(false);

  const addToCart = (item: iCardProducts) => {
    if (!cart.some((data: { id: number }) => data.id === item.id)) {
      item.count = 1;
      setCart([...cart, item]);
      toast.success("Item adicionado =)");
    } else {
      toast.error("Item já adicionado =(");
    }
  };

  const removeToCart = (remove: iCardProducts) => {
    setCart((item) => {
      const newlist = item.filter((e: iCardProducts)=> e !== remove)
      return newlist
    })
  }
  
  // const totalValue = cart.reduce((valorAnt, valorAtu: iCardProducts)=>{
  //   return parseFloat(valorAtu.price) + parseFloat(valorAnt);
  // },0)


  return (
    <CartContext.Provider value={{ cart, setCart, modal, setModal, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};
