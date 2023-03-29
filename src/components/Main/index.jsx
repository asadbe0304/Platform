import React from "react";
import "./style.scss";
import Text from "./text";
import Video from "./video";
import Card from "./../Ui/Cards";
import { customHook } from "../../hooks/hooks";
const index = () => {
  const {
    state: { navbar },
    dispatch,
  } = customHook();
  return (
    <>
      <div className="container">
        <div className={`${navbar ? "hide-hero" : "hero"} relative py-2`}>
          <Video />
          <div className="w-full relative flex bg-image items-center justify-between ">
            <Text />
          </div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default index;
