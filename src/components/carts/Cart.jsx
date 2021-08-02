import React, { memo } from "react";
import PropTypes from "prop-types";
import AppStateContext from "../../contexts/AppContext";

const Cart = ({ id, name, login, avatar_url }) => {
  return (
    <AppStateContext.Consumer>
      {({ deleteUser }) => (
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <img src={avatar_url} alt={name} className="card-img-top" />
            <h3 className="card-text">{name}</h3>
            <p>{login}</p>

            <button onClick={() => deleteUser(id)} className="btn btn-danger">
              Delete user
            </button>
          </div>
        </div>
      )}
    </AppStateContext.Consumer>
  );
};

Cart.defaultProps = {
  name: "[Name]",
  login: "[Login]",
  img: "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg",
};
Cart.propsTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default memo(Cart);
