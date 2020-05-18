const movieReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return state.concat([action.data]);
    default:
      return state;
  }
};
export default movieReducer;
