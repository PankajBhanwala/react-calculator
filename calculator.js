import { useState } from "react";
import { add } from "./utils/operators";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [currNumbers, setcurrNumbers] = useState();
  return (
    <section className="calculator-container">
      <div className="displaySection">
        <div>{currNumbers}</div>
        <div>{result}</div>
      </div>
      <div className="operators">
        <div>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
        </div>
        <div>
          <button>0</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
        </div>
        <div>
          <button>8</button>
          <button>9</button>
          <button>=</button>
          <button>^</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
