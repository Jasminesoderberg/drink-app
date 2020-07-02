import React, { useState, useEffect } from "react";
import NavLinks from "../Components/NavLink";
import Data from "../Data/drinks.json";

import "../Style/Explore.css";
import "../Style/Settings.css";

const ExplorePage = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState(" ");
  const [fileteredDrinks, setFilteredDrinks] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [selectedDrink, setSelectedDrink] = useState();

  const fetchDrinks = Data.cocktails;

  useEffect(() => {
    setDrinks(fetchDrinks);
  }, [fetchDrinks]);

  useEffect(() => {
    setFilteredDrinks(
      drinks.filter((index) => {
        return index.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, drinks]);

  const holdTheDrinks = () => {
    return (
      <div>
        {fileteredDrinks.map((item, index) => (
          <button id="DrinksButton" onClick={() => checkTrueOrFalse(index)}>
            <div key={drinks.id}>
              <p>{item.name}</p>
              <img style={{ height: 200 }} src={item.image} alt="drinks"></img>
            </div>
          </button>
        ))}
      </div>
    );
  };

  const checkTrueOrFalse = (selectedDrinks) => {
    if (toggle) {
      setSelectedDrink(selectedDrinks);
      setToggle(false);
    } else setToggle(true);
  };

  const checkDrink = () => {
    if (toggle) {
      return holdTheDrinks();
    } else return showIndividualDrinks();
  };

  const nextDrink = () => {
    setSelectedDrink(selectedDrink + 1);
  };
  const prevDrink = () => {
    setSelectedDrink(selectedDrink - 1);
  };
  const reset = () => {
    checkTrueOrFalse();
  };

  const showIndividualDrinks = () => {
    return (
      <div>
        <p>{fileteredDrinks[selectedDrink].name}</p>
        <p>{fileteredDrinks[selectedDrink].preparation}</p>
        <img
          style={{ height: 200 }}
          src={fileteredDrinks[selectedDrink].image}
          alt="drinks"
        ></img>
        <br></br>
        <button onClick={prevDrink}>Previous</button>
        <button onClick={reset}> Reset </button>
        <button onClick={nextDrink}> Next </button>
      </div>
    );
  };

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
      {checkDrink()}
    </div>
  );
};
export default ExplorePage;
