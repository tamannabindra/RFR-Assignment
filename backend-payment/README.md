## Web-Shop 
It demostrate the folder structure for the e-commerce website which demostarte its different services such as `Product`, `Order`, `Category`,`Payment`,`User` using the `Express` framework and offer the methods to do payment using Stripe, BrainTree and PayPal.

## Structure

The project consists of a top level `package.json` typical of a nodejs project. However the individual service code is in repective `modules.*` directories.

## Design Choices

1. MVC (Model-View-Controller)- The project follows the MVC architectural pattern to ensure a separation of concerns and maintainability.
4. Middleware for Cross-Cutting Concerns- Middleware functions are employed for cross-cutting concerns such as authentication, error handling, and logging. These middleware functions are defined in the utils directory and can be applied globally or selectively to specific routes.
5. Dependency Injection- The project may utilize dependency injection to inject dependencies (e.g., database connection, external service clients) into modules or services. This promotes modularity and testability by allowing components to be easily replaced or mocked during testing.
8. Strategy Pattern for Payment Methods- In the Payment Module, the integration with multiple payment providers can be implemented using the strategy pattern. Different payment providers (Stripe, BrainTree, PayPal) can be encapsulated as strategies, allowing the system to dynamically switch between them based on configuration or user preferences.

### Root Structure
The root project contains shared modules, utils and services, with individual directories for each API.

```
--project-root
    |_ app.js             // Main entry point of application
    |_ README.md          // this file
    |_ package.json       // package file. Node modules are global for all services
    |_ utils              // contains the shared code items. Reusable with all services
    |_ constant           // kept the constants of the project
    |_ modules            // modules of different services
    |_ .env               // contains the variables that conatain sensitive information  
    |_ test               // this folder contains the test cases of the application
    |_ db                 // this folder contains the database migration files

```
## Explanation of root structure

1. app.js- This is the main entry point of the application. When you start the server, `app.js` is the first file that gets executed. It typically sets up the application server, initializes middleware, defines the base routes, and starts listening for requests on a specific port.

2. Utils- The `utils` (utilities) directory contains shared code items that are reusable across different services of the application. These could be helper functions, common middleware, global error handler, validators, or any utility functions that don't fit into a specific module but are used throughout the application to avoid code duplication.
 
```
-- modules
    |_ AuthModule          
        |_controllers
        |_models
        |_routes
        |_services
        
    |_ CategoryModule
        |_controllers
        |_models
        |_routes
        |_services

    |_ OrderModule
        |_controllers
        |_models
        |_routes
        |_services

    |_ PaymentModule
        |_controllers
        |_models
        |_routes
        |_services

    |_ ProductModule
        |_controllers
        |_models
        |_routes
        |_services

    |_ UserModule
        |_controllers
        |_models
        |_routes
        |_services

```
## Explanation of each module

1. Auth Module- The Authentication Module (`AuthModule`) is responsible for all authentication-related functionalities. This includes user registration, login, and token management (for example, JWT tokens for maintaining user sessions). It ensures that only authorized users can access certain functionalities within the application.

2. Category Module- The Category Module (`CategoryModule`) manages all the operations related to product categories. It allows for the creation, updating, listing, and deleting of product categories. This helps in organizing products into different sections for easier navigation and management.

3. Order Module- The Order Module (`OrderModule`) handles everything related to customer orders. This includes placing an order, viewing order history, updating order status, and managing returns or cancellations.

4. Payment Module- The Payment Module (`PaymentModule`) deals with the financial transactions of the e-commerce platform. It integrates with payment service providers like Stripe, BrainTree, and PayPal to process payments and manage transactions. This payment module contain the sample serivce that demostrate the payment using the different payment methods such as PayPal, Stripe, and BrainTree. 

5. Product Module- The Product Module (`ProductModule`) is focused on the management of products. This includes adding new products, editing product details, deleting products, and managing inventory.

6. User Module- The User Module (`UserModule`) is all about user account management. This includes user profiles, account settings, and user-specific data.

## Want to add new payment method-

It follows the Strategy Design Pattern, allowing the client code to select a specific payment strategy at runtime. This approach adheres to the open/closed principle by enabling the addition of new payment methods without modifying existing code.
-To add support for a new payment method, create a new concrete strategy class that extends PaymentStrategy and implements the provider-specific logic.
-Update the paymentService to handle the new payment method, following the existing pattern.
-No modification is needed in existing code, demonstrating adherence to the open/closed principle.