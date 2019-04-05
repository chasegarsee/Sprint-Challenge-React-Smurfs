import React from "react";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <div>
      <div className="App">
        <div>
          <Link to="/">Smurf Village Home</Link>
        </div>
        <div>
          <Link to="/smurf-form">Add Smurf</Link>
        </div>
      </div>
    </div>
  );
};

export default Navi;
