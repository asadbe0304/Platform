

export const reducers = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        open: action.payload,
      };
  }
};
