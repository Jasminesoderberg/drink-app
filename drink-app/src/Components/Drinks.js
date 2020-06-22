import React from "react";
import Data from "../Data/drinks.json";

const Drinks = () => {
  return (
    <div>
      {Data.cocktails.map((drinks) => {
        return (
          <div key={drinks.id}>
            <p>Name: {drinks.name}</p>
            <img style={{ height: 200 }} src={drinks.image} alt="drinks"></img>
          </div>
        );
      })}
    </div>
  );
};

export default Drinks;
