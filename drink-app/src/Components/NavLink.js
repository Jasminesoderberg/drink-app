import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
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
    </div>
  );
};

export default NavLinks;
