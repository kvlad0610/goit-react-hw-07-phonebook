// import { createStore } from 'redux';
import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer });

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

export default store;
