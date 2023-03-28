import React from "react";
// import Video from "./../../assets/video/1.mp4";
import Video2 from "./../../assets/video/3.mp4";

const video = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center relative">
        <video autoPlay loop muted  className="video">
          <source src={Video2}/>
        </video>
      </div>
    </>
  );
};

export default video;
