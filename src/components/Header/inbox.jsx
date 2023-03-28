import React from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { MdAddComment, MdNotifications } from "react-icons/md";
// import { IoNotifications } from "react-icons/io";
const inbox = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="relative">
          <MdNotifications className="w-6 h-6 title" />
          <span className="w-3 h-3 rounded-full bg-orange-600 absolute top-0 right-0 p-0 title"></span>
        </div>
      </div>
    </>
  );
};

export default inbox;
