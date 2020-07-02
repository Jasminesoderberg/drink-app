import React, { useState } from "react";
import Data from "../Data/drinks.json";

const ShowInfo = () => {
  const [toggle, setToggle] = useState(false);

  const fetchDrinks = Data.cocktails;

  const showDrinks = () => {
    fetchDrinks.name((drinks) => {
      return (
        <div>
          <p>{drinks.name}</p>
          <p>{drinks.preparation}</p>
          <img style={{ height: 200 }} src={drinks.image} alt="drinks"></img>)
        </div>
      );
    });
  };

  return <div>{showDrinks}</div>;
};
export default ShowInfo;
