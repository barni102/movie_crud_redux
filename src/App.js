import React, { Component } from "react";
import MovieForm from "./MovieForm";
import AllMovie from "./AllMovie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieForm />
        <AllMovie />
      </div>
    );
  }
}
export default App;
