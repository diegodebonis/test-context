const reducer = (state, action) => {
  switch (action.type) {
    case "START_READ_POSTS":
      return {
        ...state,
        isLoading: true,
      };
    case "READ_POSTS":
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "REMOVE_POST":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
