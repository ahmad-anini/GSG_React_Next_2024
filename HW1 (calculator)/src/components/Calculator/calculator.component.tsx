import { useState } from "react";
import "./calculator.css";
import Display from "../Display/display.components";
function Calculator() {
  const [expression, setExpression] = useState<string>(""); // Input expression state
  const [result, setResult] = useState<number | string | null>(null); // Result state

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        // Use `eval` carefully for math evaluation
        setResult(eval(expression));
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult(null);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const buttons: string[] = [
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

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`btn ${btn === "=" ? "equal" : ""}`}
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
