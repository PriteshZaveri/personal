import React from "react";
import Waypoint from "react-waypoint";
import Graph from "./Graph";
import helper from "../helpers/helpers.js";
import "../../static/css/home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="block block-1">
          <div className="col-xs-12">
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
        <div className="block block-2">
          <div>
            <h1>
              <span>MY SKILLS</span>
              <div className="skills-wrapper col-lg-12">
                <div className="col-lg-6 graphs-6">
                  <Graph
                    label="HTML5"
                    width={90}
                    color1="linear-gradient(120deg, #f093fb 0%, #f5576c 100%);"
                  />
                  <Graph
                    label="CSS3"
                    width={85}
                    color1="linear-gradient(to right, #37ecba 0%, #72afd3 100%);"
                  />
                  <Graph
                    label="JS"
                    width={80}
                    color1="linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%);"
                  />
                  <Graph
                    label="REACT"
                    width={80}
                    color1="linear-gradient(to right, #00c6fb 0%, #005bea 100%);"
                  />
                  <Graph
                    label="MONGO"
                    width={60}
                    color1="linear-gradient(to right, #abecd6 0%, #fbed96 100%);"
                  />
                  <Graph
                    label="SELENIUM"
                    width={30}
                    color1="linear-gradient(to right, #cd9cf2 0%, #cd9cff 100%);"
                  />
                </div>
                <div className="col-lg-6 graphs-6">
                  <Graph
                    label="JAVA"
                    width={70}
                    color1="linear-gradient(to right, #4facfe 0%, #00f2fe 100%);"
                  />
                  <Graph
                    label="PHP"
                    width={60}
                    color1="linear-gradient(to right, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);"
                  />
                  <Graph
                    label="PYTHON"
                    width={40}
                    color1="linear-gradient(to right, #43e97b 0%, #38f9d7 100%);"
                  />
                  <Graph
                    label="NODE"
                    width={75}
                    color1="linear-gradient(to right, #13547a 0%, #80d0c7 100%);"
                  />
                  <Graph
                    label="MYSQL"
                    width={70}
                    color1="linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);"
                  />
                  <Graph
                    label="C"
                    width={45}
                    color1="linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);"
                  />
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div className="block block-3">
          <div>
            <h1>
              <span>WORK EXPERIENCE</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}