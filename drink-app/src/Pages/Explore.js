import React, { useState, useEffect } from "react";
import NavLinks from "../Components/NavLink";
import Drinks from "../Components/Drinks";
import Data from "../Data/drinks.json";

import "../Style/Explore.css";
import "../Style/Settings.css";

const ExplorePage = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState(" ");
  const [fileteredDrinks, setFilteredDrinks] = useState([]);

  const fetchDrinks = Data.cocktails;

  useEffect(() => {
    setDrinks(fetchDrinks);
  }, []);

  useEffect(() => {
    setFilteredDrinks(
      drinks.filter((theDrinks) => {
        return theDrinks.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, drinks]);

  return (
    <div>
      <NavLinks />
      <p id="Drink">Fin your favoutire drink!</p>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <br></br>
      {fileteredDrinks.map((item) => (
        <button id="DrinksButton">
          <div key={drinks.id}>
            <p>{item.name}</p>
            <img style={{ height: 200 }} src={item.image} alt="drinks"></img>
          </div>
        </button>
      ))}
    </div>
  );
};
export default ExplorePage;
