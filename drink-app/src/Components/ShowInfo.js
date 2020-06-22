import React from "react";
import Data from "../Data/drinks.json";

const ShowInfo = () => {
  return (
    <div>
      {Data.cocktails.map((drinks) => {
        return (
          <div key={drinks.id}>
            <p>{drinks.name}</p>
            <p>{drinks.preparation}</p>
            <img style={{ height: 200 }} src={drinks.image} alt="drinks"></img>
          </div>
        );
      })}
    </div>
  );
};
export default ShowInfo;
