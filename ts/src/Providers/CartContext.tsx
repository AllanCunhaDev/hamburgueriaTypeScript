import { createContext } from "react";
import { iUserProviderProps } from "./@types";





export const CartContext = createContext({});

export const CartProvider = ({children}: iUserProviderProps) => {
    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}