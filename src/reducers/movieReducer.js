const movieReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return state.concat([action.data]);
    case "DELETE_MOVIE":
      return state.filter((movie) => movie.id !== action.id);
    case "EDIT_MOVIE":
      return state.map((movie) =>
        movie.id === action.id ? { ...movie, editing: !movie.editing } : movie
      );
    case "UPDATE":
      return state.map((movie) => {
        if (movie.id === action.id) {
          return {
            ...movie,
            title: action.data.newTitle,
            description: action.data.newDescription,
            editing: !movie.editing,
          };
        } else return movie;
      });
    default:
      return state;
  }
};
export default movieReducer;
