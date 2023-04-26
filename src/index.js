import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import App from './App';
import store from "./utils/redux";

// main and global styles
import "normalize.css";

const MAIN_WRAPPER = document.getElementById('main-wrapper')
const root = ReactDOM.createRoot(MAIN_WRAPPER);
root.render(<Provider store={store}>
    <App />
</Provider>);
