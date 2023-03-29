import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import "./style.scss";
import { customHook } from "../../hooks/hooks";
const index = () => {
  const {
    state: { navbar },
    dispatch,
  } = customHook();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = navbar ? "auto" : "hidden";

    body.addEventListener("click", () => {
      if (body.classList.contains(navbar)) {
        alert("s");
      }else{
        // alert("no")
      }
    });
  }, [navbar]);

  return (
    <>
      <motion.nav
        className={`navbar p-2 pt-5 border-r-2  border-r-black ${
          navbar ? "hide-nav" : "navbar"
        }`}
      >
        <NavLogo />
        <NavList />
      </motion.nav>
    </>
  );
};

export default index;
