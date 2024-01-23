## Web-Shop
It demostrate the high-level explanation of the architecture and folder structure for a web shop.I'll provide a technology-agnostic approach using React. 


## Design Choices
1. Container/Presentation Pattern: In this we are using the Container/Presentation Pattern that ensure that within each feature, there are specific components that handle the business logic and state (container components), and other components that are solely responsible for presenting the UI (presentation components).

2. Functional Components with Hooks: With the React hooks API, you can use functional components throughout the application to manage state, lifecycle events, and context.

3. Context API for Global State: Use React's Context API to manage and distribute application-level state without the need for an external library like Redux.

4. Modularity: By dividing the application into clear, focused sections (components, context, hooks, conatiner, assets,utils), the codebase remains organized, and each part is responsible for a specific aspect of the application.

5. Separation of Concerns: Clear separation of concerns makes the application easier to maintain and understand. Each part of the system has a defined role, which simplifies debugging and development and additional features added with minimal impact on existing code.

## Structure
The project consists of a top level `package.json` typical of a nodejs project. It contain the reusable components in `components` folder, assets of application in `assets`, reusable functions in `utils` folder.

## Root Structure 
    
```
--project-root
    |_ public
    |_ src
    |_ README.md

```
```
-- src
    |_ assets 
        |_ images
    |_ components
        |_ Button
            |_ Button.css
            |_ Button.jsx
        |_ CtaegoryList
            |_ CtaegoryList.css
            |_ CtaegoryList.jsx
        |_ CheckoutForm
            |_ CheckoutForm.css
            |_ CheckoutForm.jsx
        |_ Footer
            |_ Footer.css
            |_ Footer.jsx
        |_ Header
            |_ Header.css
            |_ Header.jsx
        |_ Navbar
            |_ Navbar.css
            |_ Navbar.jsx
        |_ OrderHistory
            |_ OrderHistory.css
            |_ OrderHistory.jsx
        |_ ProductCard
            |_ ProductCard.css
            |_ ProductCard.jsx
    |_ container
        |_ Category
            |_ Category.css
            |_ Category.jsx
        |_ Home
            |_ Home.css
            |_ Home.jsx
        |_ Login
            |_ Login.css
            |_ Login.jsx
        |_ Logout
            |_ Logout.css
            |_ Logout.jsx
        |_ Order
            |_ Order.css
            |_ Order.jsx
        |_ Payment
            |_ Payment.css
            |_ Payment.jsx
        |_ Profile
            |_ Profile.css
            |_ Profile.jsx
        |_ Shipping
            |_ Shipping.css
            |_ Shipping.jsx       
    |_ context
        |_ StoreContext.jsx
    |_ hooks
        |_ AuthGuard.jsx
    |_ utils
        |_ validation.js
        |_ formatting.js
    |_ App.css 
    |_ App.js
    |_ config.js
    |_ index.css
    |_ index,js

```


## Explanation of each  module 

1. __tests__- This directory contains tests for the component and keeps the test files organized in one location but still within the `src` directory so that they have access to the source code.

2. Assets- This directory usually contains static files such as images, fonts, and possibly shared styles or CSS/SCSS files that are not directly tied to specific components.

3. Components- The reusable UI components that are not tied to specific pages id defined in the components directory. Each subdirectory typically represents a single component. 

4. Container- The container represents the components for each major section of the application.

5. Context- The `context` folder in a React web shop application is used for managing global application state using the Context API, which is a feature provided by React for sharing state across many components without having to pass props down manually at every level.

6. Hooks- It contains the custom hooks for reusing logic across components.

7. Utils- This utils folder contains the functions that are required to use in the whole application. 

8. App.css- This contain the global styles for the application. 

9. App.js- This App.js file conatin the root react component that sets up the overall structure of the application.

10. config.js- This config file contains the configuration that is used for storing constants and environment-specific variables.

11. index.js- This is the main entry point for rendering the React application.


## To add or remove payment options in the future, without the need to change the main order processing code logic.

- You can follow these steps- 
1. Add a new `<option>` element within the `<select>` element for the new payment method.
2. Ensure that the `value` attribute of the new `<option>` matches the identifier that backend expects for the new payment method.
3. Update your backend to handle the new payment method identifier accordingly.