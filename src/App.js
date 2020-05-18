import React, { Component } from "react";
import MovieForm from "./MovieForm";
import AllMovie from "./AllMovie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Movies</h2>
        </div>
        <MovieForm />
        <AllMovie />
      </div>
    );
  }
}
export default App;
