import React from "react";
import "../Style/Home.css";
import "../Style/Settings.css";
import { NavLink } from "react-router-dom";
import img from "../Images/CocktailsImg.jpg";

const HomePage = () => {
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

      <p id="Welcome">Welcome to The Cocktail Explorer!</p>
      <img src={img} alt="ImgOfDrinks"></img>
    </div>
  );
};
export default HomePage;
