import React from "react";
import { FiRadio, FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { customHook } from "../../hooks/hooks";
const NavLogo = () => {
  const {
    state: { navbar },
    dispatch,
  } = customHook();
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <div className="title font-bold text-xl flex items-center gap-2">
          <NavLink
            to="/"
            className={`${navbar ? "hidden" : "flex"} items-center gap-2 `}
          >
            <FiRadio className="logo" />
            Unity
          </NavLink>
        </div>
        <FiMenu
          className={`menu title cursor-pointer`}
          onClick={(e) => dispatch({ type: "NAVBAR", payload: true })}
        />
      </div>
    </>
  );
};
export default NavLogo;
