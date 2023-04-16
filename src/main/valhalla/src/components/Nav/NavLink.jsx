import { Link } from "react-scroll";
import React from "react";

class NavLink extends React.Component {
  render() {
    return (
      <li className="semiBold font15 pointer">
        <Link
          activeClass="active"
          className="whiteColor"
          style={{
            padding: "10px 15px",
            textShadow: "0px -3px 5px black, 0px 3px 5px black",
          }}
          to={this.props.nombre}
        >
          {this.props.nombre}
        </Link>
      </li>
    );
  }
}

export default NavLink;
