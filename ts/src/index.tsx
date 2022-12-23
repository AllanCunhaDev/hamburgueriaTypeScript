import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "./Style/global";
import { UserProvider } from "./Providers/UserContext";
import { ProductsProvider } from "./Providers/ProductsContext";
import { CartProvider } from "./Providers/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
