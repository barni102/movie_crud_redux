import React, { Component } from "react";
import { connect } from "react-redux";
class Movie extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <p>{this.props.movie.description}</p>
        <button
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
