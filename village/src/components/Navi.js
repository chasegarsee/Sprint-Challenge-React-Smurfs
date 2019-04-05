import React from "react";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <div>
      <div className="Navi">
        <div>
          <Link to="/">Village</Link>
        </div>
        <div>
          <Link to="/smurf-form">Add Smurf</Link>
        </div>
      </div>
    </div>
  );
};

export default Navi;
