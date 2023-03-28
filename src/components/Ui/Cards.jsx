import React from "react";
import "./style.scss";
import Card from "./Card";
const Cards = () => {
  return (
    <>
    <h3 className="title mt-4 mb-2 text-3xl">Top Games</h3>
      <div className="game-cards pt-4 flex flex-wrap items-start justify-start gap-2 w-full ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Cards;
