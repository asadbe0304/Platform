import { motion } from "framer-motion";
import React, { useState } from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import "./style.scss";

const index = () => {
  return (
    <>
      <motion.nav className="navbar p-2 border-r-2  border-r-black">
        <NavLogo />
        <NavList />
      </motion.nav>
    </>
  );
};

export default index;
