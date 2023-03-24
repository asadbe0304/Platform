import React from "react";
import { FiRadio, FiMenu } from "react-icons/fi";
const NavLogo = () => {
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <div className="title font-bold text-xl flex items-center gap-2">
          <FiRadio className="logo" />
          Unity
        </div>
        <FiMenu className="menu title" />
      </div>
    </>
  );
};
export default NavLogo;
