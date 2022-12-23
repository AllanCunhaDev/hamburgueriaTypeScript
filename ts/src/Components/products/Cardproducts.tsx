import { useContext } from "react";
import { CartContext } from "../../Providers/CartContext";
import { ProductsContext } from "../../Providers/ProductsContext";
import { DivContainer } from "./StyledCardProducts";

export const CardsProducts = () => {
  const { loading, productFilter } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <DivContainer>
      {loading ? (
        <h1>Aguarde um momento ... =)</h1>
      ) : (
        <ul>
          {productFilter.length &&
            productFilter.map((itens: any) => (
              <li key={itens.id}>
                <div className="div_img">
                  <img src={itens.img} alt="produto" />
                </div>
                <div className="div_descr">
                  <p className="name">{itens.name}</p>
                  <p className="category">{itens.category}</p>
                  <span className="price">
                    {itens.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <button onClick={() => addToCart(itens)}>Adicionar</button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </DivContainer>
  );
};
