import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdExplore } from "react-icons/md";

const browser = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <MdExplore className="w-6 h-6 title" />
      <h3 className="font-medium title">Browser</h3>
      <BiChevronDown className="w-6 h-6 title" />
    </div>
  );
};

export default browser;
