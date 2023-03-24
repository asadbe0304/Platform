import React from "react";
import { MdSearch } from "react-icons/md";
const input = () => {
  return (
    <>
      <label htmlFor="search" className="flex items-center justify-between gap-2">
        <MdSearch className="w-6 h-6 title" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Everything"
          className="rounded-lg py-2 px-3 bg-transparent outline-none title"
        />
      </label>
    </>
  );
};

export default input;
