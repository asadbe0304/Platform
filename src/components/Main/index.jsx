import React from "react";
import "./style.scss";
import Header from "./../Header";
import Navbar from "./../navbar";
import Text from "./text";
// import Ite from "./Ite";
import Video from "./video";
const index = () => {
  return (
    <>
      <div className="container">
        <div className="hero relative py-2 ">
          <Video />
          <div className="w-full flex items-center justify-between ">
            <Text />
            {/* <Ite /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
