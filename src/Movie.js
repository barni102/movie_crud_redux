import React, { Component } from "react";
import { connect } from "react-redux";
class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h2 className="movie_title">{this.props.movie.title}</h2>
        <p className="movie_description">{this.props.movie.description}</p>
        <button
          className="edit"
          onClick={() =>
            this.props.dispatch({
              type: "EDIT_MOVIE",
              id: this.props.movie.id,
            })
          }
        >
          Edit
        </button>
        <button
          className="delete"
          onClick={() =>
            this.props.dispatch({
              type: "DELETE_MOVIE",
              id: this.props.movie.id,
            })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}
export default connect()(Movie);
