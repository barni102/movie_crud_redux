import React, { Component } from "react";
import { connect } from "react-redux";

class EditMovie extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newDescription = this.getDescription.value;
    const data = {
      newTitle,
      newDescription,
    };
    this.props.dispatch({
      type: "UPDATE",
      id: this.props.movie.id,
      data: data,
    });
  };
  render() {
    return (
      <div className="movie">
        <h1 className="movie_heading">Editing Movie</h1>
        <form className="form" onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={(input) => (this.getTitle = input)}
            defaultValue={this.props.movie.title}
            placeholder="Enter movie Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={(input) => (this.getDescription = input)}
            defaultValue={this.props.movie.description}
            cols="28"
            placeholder="Enter movie"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditMovie);
