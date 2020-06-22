import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/ButtonComponent";

const ExporePage = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="isActive">
        <Button title="Home" className="HomeButton" />
      </NavLink>
      <NavLink to="/explore" activeClassName="isActive">
        <div>
          <Button title="Explore" className="ExploreButton" />
        </div>
      </NavLink>
    </div>
  );
};

export default ExporePage;
