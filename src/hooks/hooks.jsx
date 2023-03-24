import { useContext } from "react";
import context from "../context/context";

export const customHook = () => {
  return useContext(context);
};
