import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  import { productReducer } from "./products/Reducer.products";
  
  const rootReducer = combineReducers({
    productManager: productReducer,
  });
  
  
  const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composer(applyMiddleware(thunk))
  );