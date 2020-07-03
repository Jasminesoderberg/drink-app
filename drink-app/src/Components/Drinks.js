import React from "react";
import Data from "../Data/drinks.json";
import { NavLink } from "react-router-dom";

const Drinks = () => {
  return (
    <div>
      {Data.cocktails.map((drinks) => {
        return (
          <button id="DrinksButton">
            <NavLink to="/drinksInfo">
              <div key={drinks.id}>
                <p>{drinks.name}</p>
                <img
                  style={{ height: 200 }}
                  src={drinks.image}
                  alt="drinks"
                ></img>
              </div>
            </NavLink>
          </button>
        );
      })}
    </div>
  );
};

export default Drinks;
