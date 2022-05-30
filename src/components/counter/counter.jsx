import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  restar,
  restar_5,
  sumar,
  sumar_5,
} from "../../store/actions/counterActions";
import "./counter.css";

export const Contador = () => {
  const { number } = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();
  return (
    <div className="container">
      <section>
        <button onClick={() => dispatch(sumar_5())}>+5</button>
        <button onClick={() => dispatch(sumar())}>+</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <p>{number}</p>
        <button onClick={() => dispatch(restar())}>-</button>
        <button onClick={() => dispatch(restar_5())}>-5</button>
      </section>
    </div>
  );
};
