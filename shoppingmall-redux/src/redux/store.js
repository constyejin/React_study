// Redux 버전 업데이트 되면서 createStore 더 이상 지원하지 않음.
// import { createStore ,applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import productReducer from './reducer/productReducer';
import authenticateReducer from './reducer/authenticateReducer';

// let store = createStore(
//   rootReducer, 
//   composeWithDevTools(applyMiddleware(thunk))
// );

// combineReducer, thunk, applyMiddleware, composeWithDevTools => configureStore
const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  }
})

export default store;
