import React from "react";
import NavLinks from "../Components/NavLink";
import Drinks from "../Components/Drinks";

import "../Style/Explore.css";
import "../Style/Settings.css";

const ExplorePage = () => {
  return (
    <div>
      <NavLinks />
      <p id="Drink">Fin your favoutire drink!</p>
      <input></input>
      <button>Search</button>
      <Drinks />
    </div>
  );
};
export default ExplorePage;
