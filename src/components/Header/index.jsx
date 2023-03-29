import React from "react";
import "./style.scss";
import Inbox from "./inbox";
import Browser from "./browser";
import Input from "./input";
import Avatar from "./account";
import { customHook } from "../../hooks/hooks";

const index = () => {
  const {
    state: { navbar },
  } = customHook();
  return (
    <>
      <div className="container">
        <div
          className={`${
            navbar ? "hide-header" : "header"
          } flex items-center justify-between gap-1`}
        >
          <Browser />
          <div className="flex items-center justify-between gap-4">
            <Input />
            <Inbox />
            <Avatar />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
