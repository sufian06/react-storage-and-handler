import React from "react";
import { addToDB } from "../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, age, id } = props.cosmetic;
  const addToCart = (id) => {
    addToDB(id)
  }

  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Age: {age} years</p>
      <p><small>it has id: {id}</small></p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Cosmetic;
