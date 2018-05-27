import React from "react";
import Waypoint from "react-waypoint";
import helper from "../helpers/helpers.js";
import "../../static/css/home.css";

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
    return (
      <div className="home">
        <div className="block-1">
          <div className="col-lg-12">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 left-side">
              <h1>
                <span>THIS IS ME</span>
              </h1>
              <div className="content">
                <h4 className="name">PRITESH ZAVERI</h4>
                <p className="desig">UI Developer @ Media.net</p>
                <p className="hobby">
                  Web Developer | Gamer | Tech. Enthusiast
                </p>
                <p className="info">
                  Aged 24, Born on 27<sup>th</sup> Feb. 1994. <br />My love for
                  Computers began since I was a kid. I started programming at
                  the age of 10 with Logo being my first language on a windows
                  95 machine. <br />Gradually I started picking up new things
                  and later at the age of 17 started with{" "}
                  <span className="prog-highlight">C programming</span>. Later
                  went on to Object Oriented approach with{" "}
                  <span className="prog-highlight">Java</span>. Meanwhile I
                  started learning{" "}
                  <span className="prog-highlight">Python</span> and{" "}
                  <span className="prog-highlight">MySQL</span>. <br />Since Web
                  Developement took a huge leap in technology with HTML5 and
                  CSS3 releasing in 2014, It was then that I decided to become a
                  Web Developer and started learning the web basics. I learnt
                  <span className="prog-highlight">HTML5</span>,{" "}
                  <span className="prog-highlight">CSS3</span>,{" "}
                  <span className="prog-highlight">Javascript</span>,{" "}
                  <span className="prog-highlight">MySQL</span>,{" "}
                  <span className="prog-highlight">MongoDb</span>,{" "}
                  <span className="prog-highlight">PHP</span>,{" "}
                  <span className="prog-highlight">ReactJs</span>,{" "}
                  <span className="prog-highlight">NodeJs</span>
                  etc. to build various Web Applications. <br />Also tried my
                  hands on Android App Developement for a couple of years.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 right-side">
              <img
                src={require("../../static/images/pritesh.png")}
                className="self-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
