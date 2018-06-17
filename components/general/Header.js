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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/trending">Trending</a>
          </li>
          <li>
            <a href="/instagram">Instagram</a>
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
            <a href="/">Home</a>

            <a href="/contact">Contact</a>

            <a href="/trending">Trending</a>

            <a href="/instagram">Instagram</a>
          </ul>
        </div>
      </div>
    );
  }
}
