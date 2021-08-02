import React from "react";
import PropTypes from "prop-types";
import Cart from "./Cart";

const CartList = ({ data, deleteUser }) => {
  return (
    <>
      {data.map((e) => (
        <Cart
          id={e.id}
          name={e.name}
          login={e.login}
          avatar_url={e.avatar_url}
        />
      ))}
    </>
  );
};

CartList.defaultProps = {
  data: [],
};
CartList.propsTypes = {
  data: PropTypes.array.isRequired,
};

export default CartList;
