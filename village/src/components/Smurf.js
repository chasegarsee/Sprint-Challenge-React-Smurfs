import React from "react";

const Smurf = props => {
  const removeSmurf = event => {
    event.preventDefault();
    props.deleteSmurf(props.id);
  };
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="delete" onClick={removeSmurf}>
        Delete Smurf
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
