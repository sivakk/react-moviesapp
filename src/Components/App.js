import React, { Component } from "react";
import Movieresult from './MovieResult';
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron ">
          <div className="text-center">
            <h1>Movie Data</h1>

            <p>Movies App</p>
          </div>
        </div>
        <div className="row"><Movieresult/></div>
      </div>
    );
  }
}

export default App;
