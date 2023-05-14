## Getting started

First, install the dependencies using `npm install` or `yarn install`.

Then, run the development server:

```bash
yarn start
# OR
npm run start
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result (if it doesn't open automatically).

You can start editing pages or components. The page auto-updates as you edit and save a file.

To avoid any issues, please make sure you have the latest stable version of [Node.js](https://nodejs.org/en/) installed.

If you need to have multiple versions of Node.js installed, you can use [nvm](https://github.com/nvm-sh/nvm).

#### Developed with:

React version: 18.2.0
Node version: 18.12.1

### List of available scripts:

Xchain NFT Marketplace React Template is based on [Create-React-App](https://create-react-app.dev) template.

### `start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `gzip`

Builds the app for production to the `build` folder and compresses it with gzip and brotli.\
If your server is configured to serve pre-compressed files, you can use this command to reduce the transfer size up to 70%.

### `eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

### How to customize icon font

You can import *selection.json* located in `src/fonts/icomoon` back to the [IcoMoon app](https://icomoon.io/app) using the *Import Icons* button (or via Main Menu → Manage Projects) to retrieve icon selection.

### Environment variables

Google Analytics ID, Google Maps API key and other environment variables (social media authorization IDs etc.) are defined in `.env` file.

1. Create `.env` file in the root directory of the project.
2. Add your environment variables to `.env` file. For example:

```bash
REACT_APP_FB_APP_ID=<your-facebook-app-id>
REACT_APP_GG_APP_ID=<your-google-app-id>
REACT_APP_PUBLIC_MAP_KEY=<your-google-maps-api-key>
REACT_APP_PUBLIC_GA=<your-google-analytics-id>
```

------

## File structure

    .
    ├── public                  # static files
    │   ├── favicon.ico
    │   ├── index.html          # main HTML file
    ├── src                     # source files
    │   ├── assets              # static assets
    │   ├── components          # reusable components shared across the app
    │   ├── constants           
    │   ├── contexts            # context providers
    │   ├── db                  # fake database
    │   ├── fonts               
    │   ├── hooks               # custom hooks
    │   ├── layout              # pages layout      
    │   ├── pages               
    │   ├── styles              # global styles
    │   ├── ui                  # reusable UI components
    │   ├── utils               # helper functions
    │   ├── App.js              # main app component
    │   ├── index.js            # app entry point
    │   ├── style.scss          # global app styles
    ├── .htaccess                       # htaccess file for Apache server
    ├── babel-plugin-macros.config.js   # babel macros config (for styled-components)
    ├── craco.config.js                 # custom CRA config
    ├── jsconfig.json                   # jsconfig for IDE
    ├── package.json