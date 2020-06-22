import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Explore.css";
import "../Style/Settings.css";

const ExplorePage = () => {
  return (
    <div>
      <NavLink
        to="/"
        className="HomeButton"
        activeClassName="isActive"
        exact={true}
      >
        Home
      </NavLink>
      <NavLink
        to="/explore"
        className="ExploreButton"
        activeClassName="isActive"
      >
        Explore
      </NavLink>
      <p id="Drink">Fin your favoutire drink!</p>
      <input></input>
      <button>Search</button>
    </div>
  );
};

export default ExplorePage;
