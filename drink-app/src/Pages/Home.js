import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/ButtonComponent";

const HomePage = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="isActive">
        <div>
          <Button title="Home" className="HomeButton" />
        </div>
      </NavLink>
      <NavLink to="/explore" activeClassName="isActive">
        <div>
          <Button title="Explore" className="ExploreButton" />
        </div>
      </NavLink>
      <p>Welcome to The Cocktail Explorer</p>
    </div>
  );
};
export default HomePage;
