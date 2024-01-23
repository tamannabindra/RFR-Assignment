import React from "react";
import { PAYMENT_METHODS } from "../../assets/constants/constants";
import "./CheckoutForm.css";

const CheckoutForm =({ selectedProduct, paymentType, setPaymentType, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="checkout-form">
      <h3>Product: {selectedProduct.name}</h3>
      <p>Price: ${selectedProduct.price}</p>
      <p>Quantity: {selectedProduct.quantity}</p>
      <label>
        Payment Method:
        <select
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}   // On the basis of user selection, the setPaymentType value gets updated
        >
          {PAYMENT_METHODS.map((method) => (
            <option key={method.value} value={method.value}>
              {method.label}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Pay</button>
    </form>
  );
};

export default CheckoutForm;
