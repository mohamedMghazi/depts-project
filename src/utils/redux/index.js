import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Reducers
import engineers from './services/engineers/reducer';

// Configuration
const middleware = [thunk];
const reducers = { engineers }

const store = configureStore({ reducer: reducers, middleware });
export default store;
