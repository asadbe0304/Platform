import React from "react";
import { FiRadio, FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const NavLogo = () => {
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <div className="title font-bold text-xl flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
          <FiRadio className="logo" />
          Unity
          </NavLink>
        </div>
        <FiMenu className="menu title" />
      </div>
    </>
  );
};
export default NavLogo;
