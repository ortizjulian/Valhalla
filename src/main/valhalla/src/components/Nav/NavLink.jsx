import { Link } from "react-scroll";
import React from "react";

class NavLink extends React.Component {
    render() {
      return (
        <li className="semiBold font15 pointer">
        <Link
          activeClass="active"
          className="whiteColor"
          style={{ padding: "10px 15px" }}
          to={this.props.nombre}

        >
          {this.props.nombre}
        </Link>
      </li>
      );
    }
  }

  export default NavLink;