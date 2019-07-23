import React, { Component } from "react";
import Axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const [name, age, height] = [
      this.state.name,
      Number(this.state.age),
      this.state.height
    ];
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    Axios.post("http://localhost:3333/smurfs", {
      name,
      age,
      height
    })
      .then(res => {
        this.props.updateSmurfs(res.data);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
