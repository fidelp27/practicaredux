// Se importan los types para luego usarlos en el las funciones que ejecutará en reducer

import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

export const sumar = () => ({
  type: INCREMENT,
});

export const restar = () => ({
  type: DECREMENT,
});

// Payload es la unformación adicional que queremos enviar al reducer para afectar el state en el store
export const sumar_5 = () => ({
  type: INCREMENT_5,
  payload: 5,
});

export const restar_5 = () => ({
  type: DECREMENT_5,
  payload: 5,
});

export const reset = () => ({
  type: RESET,
});
