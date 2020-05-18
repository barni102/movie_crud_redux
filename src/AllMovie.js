import React, { Component } from "react";
import { connect } from "react-redux";

import Movie from "./Movie";

class AllMovie extends Component {
  render() {
    return (
      <div>
        <h1>All Movies</h1>
        {this.props.movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state,
  };
};

export default connect(mapStateToProps)(AllMovie);
