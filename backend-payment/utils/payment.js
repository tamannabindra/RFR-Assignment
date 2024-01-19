/**
 * We would typically require and configure the actual payment SDKs for Stripe, BrainTree and PayPal here.
 */

class PaymentStrategy {
  processPayment(orderDetails) {
    throw new Error("PaymentStrategy.processPayment() must be implemented");
  }
}

class StripePaymentStrategy extends PaymentStrategy {
  constructor() {
    super();
    // Initilaize the Stripe client here.
  }
  processPayment(orderDetails) {
    console.log(`Processing payment for order ${orderDetails.id} via Stripe`);
    // Implement Stripe payment logic here
  }
}

class BraintreePaymentStrategy extends PaymentStrategy {
  constructor() {
    super();
    this.gateway = new braintree.BraintreeGateway({
      environment: braintree.Environment.Sandbox,
      merchantId: process.env.BRAINTREE_MERCHANT_ID,
      publicKey: process.env.BRAINTREE_PUBLIC_KEY,
      privateKey: process.env.BRAINTREE_PRIVATE_KEY,
    });
  }
  processPayment(orderDetails) {
    console.log(
      `Processing payment for order ${orderDetails.id} via Braintree`
    );
    // Implement Braintree payment logic here
  }
}

class PayPalPaymentStrategy extends PaymentStrategy {
  constructor() {
    super();
    this.client = new paypal.core.PayPalHttpClient(
      new paypal.core.SandboxEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_CLIENT_SECRET
      )
    );
  }
  processPayment(orderDetails) {
    console.log(`Processing payment for order ${orderDetails.id} via PayPal`);
    // Implement PayPal payment logic here
  }
}

// Export the different payment strategies to use this in other part of application
module.exports = {
  StripePaymentStrategy,
  BraintreePaymentStrategy,
  PayPalPaymentStrategy,
};
