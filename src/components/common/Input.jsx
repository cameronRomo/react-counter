import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{ label }</label>
      <input
        autoFocus
        ref={name}
        id="name"
        name="name"
        type="text"
        value={value}
        onChange={onChange}
        className="from-control"
      />
    </div>
  );
};

export default Input;
