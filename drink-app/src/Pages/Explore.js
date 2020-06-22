import React from "react";
import { NavLink } from "react-router-dom";

const ExplorePage = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="isActive">
        Home
      </NavLink>
      <NavLink to="/" activeClassName="isActive">
        Explore
      </NavLink>
    </div>
  );
};

export default ExplorePage;
