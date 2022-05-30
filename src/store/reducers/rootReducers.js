import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

// Centra todos los reducer en uno para luego pasarlos al store
const rootReducers = combineReducers({
  counterReducer,
});

export default rootReducers;
