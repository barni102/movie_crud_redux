import React, { Component } from "react";
import { connect } from "react-redux";

import Movie from "./Movie";
import EditMovie from "./EditMovie";

class AllMovie extends Component {
  render() {
    return (
      <div>
        <h1 className="movie_heading" id="all_movie">
          All Movies
        </h1>
        {this.props.movies.map((movie) => (
          <div key={movie.id}>
            {movie.editing ? (
              <EditMovie movie={movie} key={movie.id} />
            ) : (
              <Movie key={movie.id} movie={movie} />
            )}
          </div>
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
