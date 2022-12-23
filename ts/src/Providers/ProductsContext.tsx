import { createContext, useState, useEffect } from "react";
import { Api } from "../Api/api";
import { iUserProviderProps } from "./@types";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }: iUserProviderProps) => {

  // const {cart, setCart} = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  // const filtered = productFilter.find((item) => item.id === id);
  // setCart([...cart, {...filtered, count:1}]);

  useEffect(() => {
    const token = localStorage.getItem("@HAMBURGUERIA2.0");
    if (token) {
      const verify = async () => {
        try {
          setLoading(true);
          const response = await Api.get("/products", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setProducts(response.data);
          setProductFilter(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      verify();
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        productFilter,
        setProductFilter,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
