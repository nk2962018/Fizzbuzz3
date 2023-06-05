import { useState } from "react";
import Button from "./Button";
import "./Fizzbuzz.css";

const Fizzbuzz = () => {
  const [count, setCount] = useState(1);

  const play = () => {
    if (count % 3 === 0 && count % 15 !== 0) return "Fizz";
    else if (count % 5 === 0 && count % 15 !== 0) return "Buzz";
    else if (count % 15 === 0) return "FizzBuzz";
    else return count;
  };

  const getUIStyles = (result) => {
    if (result === "Fizz" || result === "Buzz" || result === "FizzBuzz")
      return result.toLowerCase();
    return "count-color";
  };

  const playUI = () => {
    const result = play();
    const className = getUIStyles(result);
    return <div className={className}>{result}</div>;
  };

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount((count) => {
      if (count - 1 < 1) {
        return 1;
      }
      return count - 1;
    });
  };

  return (
    <div data-testid="fizzBuzz">
      <Button
        data-testid="incrementCounter"
        onClick={incrementCounter}
        text="Increment"
      />
      <Button
        data-testid="decrementCounter"
        onClick={decrementCounter}
        text="Decrement"
      />
      <div data-testid="result" id="counter">
        {playUI()}
      </div>
    </div>
  );
};

export default Fizzbuzz;
