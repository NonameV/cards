import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ addItem, isDisabled, error }) => {
  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(val);
    setVal("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {isDisabled ? (
        <div>Loading...</div>
      ) : (
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          type="text"
        />
      )}
      <button type="submit">submit</button>
      {error && (
        <div class="alert alert-primary" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

Form.propsTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
