import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdExplore, MdMenu } from "react-icons/md";
import { customHook } from "../../hooks/hooks";

const browser = () => {
  const {
    state: { navbar },
    dispatch,
  } = customHook();

  return (
    <div className="flex items-center justify-between gap-3">
      <div
        className={`${navbar ? "open-menu" : "hide-menu"} open-menu cursor-pointer`}
        onClick={() => dispatch({ type: "NAVBAR", payload: false })}
      >
        <MdMenu className="w-6 h-6 title" />
      </div>
      <MdExplore className="w-6 explore-icon h-6 title" />
      <h3 className="font-medium title browser">Browser</h3>
      <BiChevronDown className="w-6 down h-6 title" />
    </div>
  );
};

export default browser;
