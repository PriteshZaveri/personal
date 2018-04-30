import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
