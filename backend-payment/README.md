## Web-Shop 
It demostrate the folder structure for the e-commerce website which demostarte its different services such as `Product`, `Order`, `Category`,`Payment`,`User` using the `Express` framework and offer the methods to do payment using Stripe, BrainTree and PayPal.

## Structure

The project consists of a top level `package.json` typical of a nodejs project. However the individual service code is in repective `modules.*` directories.

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

