import React from "react";
import PropTypes from "prop-types";
import Cart from "./Cart";
import { useAppContext } from "../../contexts/AppContext";

const CartList = () => {
  const state = useAppContext();
  return (
    <>
      {state.items.map((e) => (
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
