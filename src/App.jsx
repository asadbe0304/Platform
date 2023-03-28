import React from "react";
import { customHook } from "./hooks/hooks";
import Route from "./routes/route";
import Video from "./components/Main/video";
const App = () => {
  return (
    <>
      <Video />
      <Route />
    </>
  );
};

export default App;
