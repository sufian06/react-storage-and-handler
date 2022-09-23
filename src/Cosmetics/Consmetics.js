import React from "react";
import { add, multiply } from "../utilities/calculate";

const Cosmetics = () => {
  const first = 55;
  const second = 66;
  const total = add(first, second);
  const result = multiply(first, second)
  return (
    <div>
      <h1>Welcome to my cosmetic store</h1>
      <p>Total: {total}</p>
      <p>Result: {result}</p>
    </div>
  );
};

export default Cosmetics;
