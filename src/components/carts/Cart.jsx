import React from "react";

const Cart = ({ name, login, img }) => {
  return (
    <div сlassName="card">
      <div className="card-body">
        <h3>{name}</h3>
        <p>{login}</p>
        <img src={img} />
        <button className="btn btn-danger">Delete user</button>
      </div>
    </div>
  );
};

export default Cart;
