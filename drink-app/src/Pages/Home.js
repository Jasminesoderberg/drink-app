import React from "react";
import "../Style/Home.css";
import "../Style/Settings.css";
import NavLinks from "../Components/NavLink";
import img from "../Images/CocktailsImg.jpg";

const HomePage = () => {
  return (
    <div>
      <NavLinks />

      <p id="Welcome">Welcome to The Cocktail Explorer!</p>
      <img src={img} alt="ImgOfDrinks"></img>
    </div>
  );
};
export default HomePage;
