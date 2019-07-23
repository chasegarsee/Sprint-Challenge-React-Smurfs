import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Navi from "./components/Navi";

import { Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  handleUpdateSmirfs = smurfs => {
    this.setState({
      smurfs
    });
  };

  handleDeleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Navi className="Navi" />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} updateSmirfs={this.handleUpdateSmirfs} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.handleDeleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
