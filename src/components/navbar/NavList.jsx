import React from "react";
import { BsFillTvFill, BsTree } from "react-icons/bs";
import {
  MdAppShortcut,
  MdFeaturedPlayList,
  MdStream,
  MdMusicVideo,
  MdRssFeed,
} from "react-icons/md";
const NavList = () => {
  return (
    <div className="flex flex-col items-start justify-between w-full p-2">
      <div className="flex items-center justify-between w-full title">
        News Feeds
      </div>
      <ul className="list-none nav-list w-full flex items-start justify-between gap-2 flex-col">
        <li className="flex items-center title p-3 justify-start w-full hover:bg-cyan-600 gap-4 rounded-lg">
          <MdRssFeed className="w-6 h-6" />
          New Feed
        </li>
        <li className="flex items-center title p-3 justify-start w-full hover:bg-cyan-600 gap-4 rounded-lg">
          <BsTree className="w-6 h-6" />
          Trending
        </li>
        <li className="flex items-center p-3 title justify-start w-full hover:bg-cyan-600 gap-4 rounded-lg">
          <MdFeaturedPlayList className="w-6 h-6" />
          Playlist
        </li>
        <li className="flex items-center p-3 title justify-start w-full hover:bg-cyan-600 gap-4 rounded-lg">
          <MdAppShortcut className="w-6 h-6" />
          Shorts
        </li>
        <li className="flex items-center p-3 title justify-start w-full hover:bg-cyan-600 gap-4 rounded-lg">
          <MdStream className="w-6 h-6" />
          Stream
        </li>
        <li className="flex items-center p-3 title justify-start w-full hover:bg-cyan-600 gap-4 rounded-lg">
          <MdMusicVideo className="w-6 h-6" />
          Music
        </li>
      </ul>
    </div>
  );
};

export default NavList;
