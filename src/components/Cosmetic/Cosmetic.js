import React from "react";

const Cosmetic = (props) => {
  const { name, age } = props.cosmetic;
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "10px",
        margin: "20px",
        border: "2px solid black",
      }}
    >
      <h2>Buy this: {name}</h2>
      <p>Age: {age} years</p>
    </div>
  );
};

export default Cosmetic;
