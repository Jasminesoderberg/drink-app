import React from "react";
import "../Style/Home.css";
import { NavLink } from "react-router-dom";
import img from "../Images/CocktailsImg.jpg";

const HomePage = () => {
  return (
    <div>
      <NavLink to="/" className="HomeButton" activeClassName="isActive">
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
