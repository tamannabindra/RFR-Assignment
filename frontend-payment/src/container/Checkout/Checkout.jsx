import React, { useState } from "react";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import axios from "axios";
import PAYMENT_METHODS from "../../assets/constants/constants";

const CheckoutPage = ({ selectedProduct }) => {
  const [paymentType, setPaymentType] = useState(PAYMENT_METHODS[0].value); // Use stripe as defualt state

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
    <CheckoutForm
      selectedProduct={selectedProduct}
      paymentType={paymentType}
      setPaymentType={setPaymentType}
      onSubmit={handleSubmit}
    />
  );
};
export default CheckoutPage;
