/**
 * Services are often responsible for managing transactions, ensuring that operations that involve multiple steps or changes to data are completed successfully or rolled back if an error occurs.
 * Services often invoke data access layer functions or ORM (Object-Relational Mapping) methods to retrieve and manipulate data.
 */

// Import the payment startegies here

class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  processPayment(orderDetails) {
    this.strategy.processPayment(orderDetails);
  }
}

const paymentService = {
  processPayment(provider, orderDetails) {
    let strategy;

    switch (provider) {
      case "stripe":
        strategy = new StripePaymentStrategy();
        break;
      case "braintree":
        strategy = new BraintreePaymentStrategy();
        break;
      case "paypal":
        strategy = new PayPalPaymentStrategy();
        break;
      default:
        throw new Error(`Payment provider not supported: ${provider}`);
    }

    const paymentContext = new PaymentContext(strategy);
    paymentContext.processPayment(orderDetails);
  },
};

module.exports = paymentService;
