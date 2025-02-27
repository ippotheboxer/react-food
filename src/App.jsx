import { useState } from "react";
import { CartProvider } from "./store/Cart";
// Components
import Cart from "./components/OrderProcess/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./components/OrderProcess/Checkout";
import Success from "./components/OrderProcess/Success";

function App() {
  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header/>
        <Meals />
        <Cart />
        <Checkout />
        <Success />
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;
