import React from "react";
import "./style.scss";
import Inbox from "./inbox";
import Browser from "./browser";
import Input from "./input";
import Avatar from "./account";
import Hero from "./../Main";
const index = () => {
  return (
    <>
      <div className="w-full flex items-center header justify-between gap-1">
        <Browser />
        <Input />
        <div className="flex items-center justify-between gap-4">
          <Inbox />
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default index;
