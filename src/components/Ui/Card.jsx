import React from "react";
import Img from "./../../assets/images/one.png"
import Avatar from "./../../assets/images/a.jpg"

const Card = () => {
  return (
    <div className="card rounded-lg flex flex-col items-start justify-between gap-3" >
      <div className="card-image rounded-lg">
        <img src={Img} alt="images" className="w-full rounded-lg" />
      </div>
      <div className="card-body p-2 w-full">
        <div className="card-body-inner gap-3 flex items-start justify-between w-full">
          <img width={50} className="rounded-full" src={Avatar} alt="avatar images" />
          <div className="flex flex-col items-start justify-between gap-2">
            <h3 className="title font-medium text-md">
              Create 3D Site with Spline and React - Full Course
            </h3>
            <p className="title text-sm">DesignCode</p>
            <div className="time flex  items-center justify-start gap-2 w-full">
              <span className="title text-sm">14k views</span>
              <span className="title text-sm">1 month ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
