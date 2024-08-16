# Create a React App

## React Library
- **react-dom** (used for web development)
- **react-native** (used for app development)

## Package Manager
- **npm** - Node Package Manager  
  Used to install the dependencies.
- **npx** - Node Package Executor  
  Executes dependencies without installing them locally, avoiding dependency pollution.

## Creating a React App

1. **npx create-react-app react**  
   This installs many dependencies in a large bundle size, which can make the application bulky.

2. **Vite and Parcel**  
   These utilities do not contain the `node_modules`, and testing libraries are missing, but they are faster.

## Anatomy of a React App

The first thing to do when entering a React project is to go through the `package.json`, which provides an overview of the project's external dependencies.

1. **package.json** - Contains all the dependencies and their versions.
    - **name:** Name of the project.
    - **version:** Version of your project, following the format MAJOR.MINOR.PATCH.
    - **private:** Prevents accidental publishing of the private project.
    - **dependencies:** External libraries used in the project.
        - **Testing libraries:**
            - `@testing-library/jest-dom`: ^5.17.0
            - `@testing-library/react`: ^13.4.0
            - `@testing-library/user-event`: ^13.5.0
        - **Version of React and other libraries:**
            - `react`: ^18.3.1
            - `react-dom`: ^18.3.1 (used for web development)
            - `react-scripts`: 5.0.1 (includes scripts for starting the project and environment configuration)
            - `web-vitals`: ^2.1.4 (used to measure the performance of the website)
    - **scripts:** Contains scripts to start the project.
        - `"start": "react-scripts start"` - Starts the development server, which has hot-reloading to render changes in the browser immediately.
        - `"build": "react-scripts build"` - Optimizes the project for the production server for deployment.
        - `"test": "react-scripts test"` - Executes test cases on the React project.
        - `"eject": "react-scripts eject"` - Ejects out of the Create React App setup to move to a custom configuration or another framework.
    - **eslintConfig:** Provides efficient debugging and syntax error checking, extending the main React library.
    - **browserslist:** Lists the browsers the project supports.
        - **development:** Browsers supported during development.
        - **production:** Browsers supported in production.
    - **devDependencies:** Libraries used only during development; they are not added to dependencies when building for production.

### Starting a React Project

1. **npx create-react-app**  
   This creates a React project.

2. **npm run start**  
   A server will be launched by Webpack or a similar tool.

    - **Local:** `http://localhost:3000` - The local host accesses your device port.
    - **On Your Network:** `http://10.216.19.38:3000` - The IP address of your machine provided by the router. Any other device on the same network can access the application.

3. **npm run build**  
   This creates a `build` directory within the project, where the complete React project is optimized into JavaScript. This build is then used for deployment.

### Starting a Vite React Project

1. **npm i / npm install**  
   Installs the necessary `node_modules`.

2. **npm run dev**  
   Starts the development server.

### Cleaning Up the React Project

#### NPM React Project
- **Delete unnecessary files:**  
  Run the command to remove files:
  ```bash
  rm -rf logo.svg setupTests.js reportWebVitals.js index.css App.css App.test.js
