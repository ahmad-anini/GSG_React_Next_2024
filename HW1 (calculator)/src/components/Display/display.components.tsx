import "./dispaly.css";

interface IDisplayProps {
  expression: string;
  result: number | string | null;
}

function Display({ expression, result }: IDisplayProps) {
  return (
    <div className="display-container">
      <span className="expression">{expression} </span>
      {result && <span className="result"> {`= ${result}`}</span>}
    </div>
  );
}

export default Display;
