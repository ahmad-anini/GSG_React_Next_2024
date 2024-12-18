import "./dispaly.css";
interface DisplayProps {
  expression: string; // The mathematical expression to display
  result: number | string | null; // The result to display (number, string, or null)
}

function Display({ expression, result }: DisplayProps) {
  console.log(result);
  return (
    <div className="display-container">
      <span className="expression">{expression} </span>
      <span className="result"> {result}</span>
    </div>
  );
}

export default Display;
