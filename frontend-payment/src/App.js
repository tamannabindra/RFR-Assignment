import React from "react";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import "./App.css";

const App = () => {
  // Example selectedProduct data. This would usually come from your app's state or props.
  const selectedProduct = {
    id: "123",
    name: "Awesome Widget",
    price: 19.99,
    quantity: 1,
  };

  return (
    <div className="app-container">
        <h1>Web-Shop</h1>
        <CheckoutForm selectedProduct={selectedProduct} />
      </div>
  );
};

export default App;
