import React from "react";
import "../../static/css/header.css";
import $ from "jquery";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  openNav = () => {
    document.getElementById("mobile-nav").style.width = "350px";
  };

  closeNav = () => {
    document.getElementById("mobile-nav").style.width = "0";
  };

  render() {
    return (
      <div className="nav-wrapper ">
        <div className="logo-container col-md-2">
          <img src={require("../../static/images/logo.png")} className="logo" />
          <span className="fname">Pritesh</span>
          <span className="lname">Zaveri</span>
        </div>
        <ul className="col-md-10 desk-ul">
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
        <span className="hamburger">
          <i className="fas fa-bars" onClick={this.openNav.bind(this)} />
        </span>
        <div id="mobile-nav">
          <span className="times">
            <i className="fas fa-times" onClick={this.closeNav.bind(this)} />
          </span>
          <ul>
            <a href="#">Home</a>

            <a href="#">Contact</a>

            <a href="#">Trending</a>

            <a href="#">Memories</a>
          </ul>
        </div>
      </div>
    );
  }
}
