import React, { useState } from "react";
import axios from "axios";

const CheckoutForm = ({ selectedProduct }) => {
  const [paymentType, setPaymentType] = useState("stripe"); // Use stripe as defualt state

  const handleSubmit = async (event) => {
    // prevent the full releoad of the application
    event.preventDefault();

    // Construct product details from the selected product
    const productDetails = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: selectedProduct.quantity,
    };

    try {
      // Make the HTTP request to the payment service
      const response = await axios.post("/process-order", {
        paymentType,
        productDetails,
      });
      console.log(response.data);
      // Interraction with payment SDK for processing the payment is performed here.
      // Rediect user to the 3rd party payment service for processing the payment.
    } catch (error) {
      console.error("Error processing payment", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Product: {selectedProduct.name}</h3>
      <p>Price: ${selectedProduct.price}</p>
      <p>Quantity: {selectedProduct.quantity}</p>

      <label>
        Payment Method:
        <select
          // On the basis of user selection, the setPaymentType value gets updated
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
        >
          <option value="stripe">Stripe</option>
          <option value="braintree">Braintree</option>
          <option value="paypal">PayPal</option>
        </select>
      </label>
      <button type="submit">Pay</button>
    </form>
  );
};

export default CheckoutForm;
