import { useState } from "react";
import Display from "../Display/display.components";
import "./calculator.css";

const BUTTONS: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "=",
];

function Calculator() {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<number | string | null>(null);

  const handleClick = (value: string) => {
    if (value === "=") {
      calculateResult();
    } else {
      appendToExpression(value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(expression));
    } catch {
      setResult("Invalid Expression");
    }
  };

  const appendToExpression = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const getClassName = (btn: string) => {
    if (btn === "=") return "btn equal";
    if (btn === "+" || btn === "-") return "btn plus-minus";
    return "btn";
  };

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <div className="buttons">
        {BUTTONS.map((btn, index) => (
          <button
            key={index}
            className={getClassName(btn)}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
