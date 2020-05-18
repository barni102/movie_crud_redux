import React, { Component } from "react";
import { connect } from "react-redux";

class MovieForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const description = this.getDescription.value;
    const data = {
      id: new Date(),
      title,
      description,
    };
    this.props.dispatch({
      type: "ADD_MOVIE",
      data,
    });
    this.getTitle.value = "";
    this.getDescription.value = "";
  };
  render() {
    return (
      <div>
        <h1>Create Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={(input) => (this.getTitle = input)}
            placeholder="Enter Movie Title"
          />{" "}
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={(input) => (this.getDescription = input)}
            cols="28"
            placeholder="Enter Description"
          />{" "}
          <br /> <br />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
export default connect()(MovieForm);
