import { createContext, useReducer } from "react";
import { reducers } from "./reducer";

const context = createContext({});

const initialState = {
  open: false,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export default context;
