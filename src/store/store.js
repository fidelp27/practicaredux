import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";

// Recibe todos los reducers
export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// Identifica los cambios en el store para ejecutar algo
store.subscribe(() => console.log(store));
