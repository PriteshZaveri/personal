import React from "react";
import Waypoint from "react-waypoint";
import helper from "../helpers/helpers.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation1: false,
      animation2: false,
      animation3: false,
      animation4: false
    };
  }

  handleAnimation = (animation, animationName) => {
    this.state[animation] === true
      ? null
      : (helper.handleAnimation(animation, animationName),
        this.setState({ [animation]: true }));
  };
  render() {
    return <div />;
  }
}
