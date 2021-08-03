import React, { useState } from "react";
import PropTypes from "prop-types";
import { useAddItem } from "../../contexts/AppContext";

const Form = () => {
  const [val, setVal] = useState("");
  const { state, addItem } = useAddItem();
  const isDisabled = state.status === "pending";
  const { error } = state;
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
