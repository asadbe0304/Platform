import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../components/Main";
import Header from "./../components/Header";
import Navbar from "./../components/navbar";
const route = () => {
  return (
    <>
      <div className="w-full flex items-start justify-between">
        <Navbar />
        <div className="w-full container bg flex flex-col justify-between items-center">
          <Header />
          <Home />
        </div>
      </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </>
  );
};

export default route;
