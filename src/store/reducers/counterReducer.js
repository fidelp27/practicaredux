// Se importan los types para no copiarlos de vuelta
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_5,
  DECREMENT_5,
  RESET,
} from "../types";

// Debe ser un objeto para luego pasarlo al rootReducer
const initialState = {
  number: 0,
};

// Siempre reciben el estado anterior para luego modificarlo ...state
// Se hace un switch por cada caso que tenemos en los actions
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    case INCREMENT_5:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case DECREMENT_5:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
export default counterReducer;
