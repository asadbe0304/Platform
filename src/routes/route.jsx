import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../components/Main";
import Header from "./../components/Header";
import Trend from "./../pages/trend";
import Play from "./../pages/Playlist";
// import Stream from "./../pages/Stream";
import Short from "./../pages/Short";
import Music from "./../pages/music";
import Navbar from "./../components/navbar";
const route = () => {
  return (
    <>
      <div className="w-full flex items-start justify-between">
        <div className="w-full container bg flex flex-col justify-between items-center"></div>
      </div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/play" element={<Play />} />
        <Route path="/music" element={<Music />} />
        {/* <Route path="/stream" element={<Stream />} /> */}
        <Route path="/short" element={<Short />} />
      </Routes>
    </>
  );
};

export default route;
