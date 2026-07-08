import { useContext } from "react";
import { NumberContext } from "./NumberContext";

function NumberDisplay() {
  const number = useContext(NumberContext);

  return <h1>Number: {number}</h1>;
}

export default NumberDisplay;