import React from "react";
import Video from "./../../assets/video/3.mp4";

const video = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center relative">
        <video src={Video} autoPlay loop muted className="video rounded-lg" />
      </div>
    </>
  );
};

export default video;
