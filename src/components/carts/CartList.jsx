import React from "react";
import PropTypes from "prop-types";
import Cart from "./Cart";

const CartList = ({ data }) => {
  return (
    <div className="container">
      {data.map((e) => (
        <Cart key={e.id} name={e.name} login={e.login} img={e.avatarUrl} />
      ))}
    </div>
  );
};

CartList.defaultProps = {
  data: [],
};
CartList.propsTypes = {
  data: PropTypes.array.isRequired,
};

export default CartList;
