import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ addItem }) => {
  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(val);
    setVal("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input value={val} onChange={(e) => setVal(e.target.value)} type="text" />
    </form>
  );
};

Form.propsTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
