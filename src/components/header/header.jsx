import React from "react";
import { useSelector } from "react-redux";
import "./header.css";

export const Header = () => {
  const { number } = useSelector((state) => state.counterReducer);
  return (
    <header>
      <p>El número activo es: {number} </p>
    </header>
  );
};
