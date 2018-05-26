import React from "react";
import "../../static/css/header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-wrapper ">
        <div className="logo-container col-md-2">
          <img src={require("../../static/images/logo.png")} className="logo" />
          <span className="fname">Pritesh</span>
          <span className="lname">Zaveri</span>
        </div>
        <ul className="col-md-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Memories</a>
          </li>
        </ul>
      </div>
    );
  }
}
