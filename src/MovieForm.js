import React, { Component } from "react";

class MovieForm extends Component {
  render() {
    return (
      <div>
        <h1>Create Movie</h1>
        <form>
          <input required type="text" placeholder="Enter Movie Title" /> <br />
          <br />
          <textarea
            required
            rows="5"
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
export default MovieForm;
