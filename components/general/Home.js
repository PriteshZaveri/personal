import React from "react";
import Waypoint from "react-waypoint";
import Graph from "./Graph";
import Workex from "./Workex";
import Education from "./Education";
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
                    color1="linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"
                  />
                  <Graph
                    label="CSS3"
                    width={85}
                    color1="linear-gradient(to right, #37ecba 0%, #72afd3 100%)"
                  />
                  <Graph
                    label="JS"
                    width={80}
                    color1="linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)"
                  />
                  <Graph
                    label="REACT"
                    width={80}
                    color1="linear-gradient(to right, #00c6fb 0%, #005bea 100%)"
                  />
                  <Graph
                    label="MONGO"
                    width={60}
                    color1="linear-gradient(to right, #abecd6 0%, #fbed96 100%)"
                  />
                  <Graph
                    label="SELENIUM"
                    width={30}
                    color1="linear-gradient(to right, #cd9cf2 0%, #cd9cff 100%)"
                  />
                </div>
                <div className="col-lg-6 graphs-6">
                  <Graph
                    label="JAVA"
                    width={70}
                    color1="linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
                  />
                  <Graph
                    label="PHP"
                    width={60}
                    color1="linear-gradient(to right, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)"
                  />
                  <Graph
                    label="PYTHON"
                    width={40}
                    color1="linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
                  />
                  <Graph
                    label="NODE"
                    width={75}
                    color1="linear-gradient(to right, #13547a 0%, #80d0c7 100%)"
                  />
                  <Graph
                    label="MYSQL"
                    width={70}
                    color1="linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)"
                  />
                  <Graph
                    label="C"
                    width={45}
                    color1="linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)"
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
          <Workex
            designation="Application Development Analyst"
            duration="Aug 2016 - Dec 2017"
            company="Accenture Solutions Pvt. Ltd."
          >
            <div>
              Trained in SAP Sales and Distribution module. Worked on various
              technologies in different domains such as Automation Initiatives
              and products based on Artificial Intelligence.<br />
              <b>Career Highlights:</b>
              <br />1) Created 7 independent Automation utilities that resulted
              in more than 8000 hrs and $750,000 worth of savings in 1 financial
              year which was highly appreciated by the client.<br />2) Won star
              employee of the month twice in 8 months.<br />3) Created a website
              from scratch that served as a Dashboard for team management. The
              website is hosted on AWS and has proven to be beneficial to the
              team. The Dashboard is even demonstrated to various Accenture MDs
              and got highly appreciated for it. I was also a part of the team
              that created a chat bot called MITR (Machine Intelligent Ticket
              Resolver)
            </div>
          </Workex>
          <Workex
            designation="UI Developer"
            duration="Dec 2017 - Present"
            company="Media.net"
          >
            <div>
              Currently working as a UI Developer on multiple projects primarily
              using Javascript frameworks such as React.Js, Node.Js etc. along
              with HTML5, CSS3 and Jquery.<br />
              The work also involves creating many frontend elements such as
              Emails, Landing pages and Search engine results page.<br />
              <b>Websites currently built:</b>{" "}
              <i>
                <u>
                  mobilesinsider.com, laptopsinsider.com, tvsinsider.com,
                  degreescompared.com
                </u>
              </i>
            </div>
          </Workex>
          <Workex
            designation="Free Lancing"
            duration="Sept 2015 - Present"
            company="Web Developer"
          >
            <div>
              I have been freelancing since college to make websites and android
              apps.<br />
              <b>Websites:</b>{" "}
              <i>
                <u>
                  page3manali.in, zestchocolates.com, vowexhibitionandevents.com
                </u>
              </i>
              <br />
              <b>Apps:</b>{" "}
              <i>
                <u>Random - Quartifex (Google Playstore)</u>
              </i>
            </div>
          </Workex>
        </div>
        <div className="block block-4">
          <div>
            <h1>
              <span>EDUCATION</span>
            </h1>
          </div>
          <Education
            designation="Bachelor of Engineering"
            duration="2012 - 2016"
            company="K.J.Somaiya College of Engineering"
          >
            <div>6.77 C.G.P.A</div>
          </Education>
          <Education
            designation="H.S.C"
            duration="2010 - 2012"
            company="Mithibai College"
          >
            <div>76.17 %</div>
          </Education>
          <Education
            designation="S.S.C"
            duration="2010"
            company="St. Xavier's High School"
          >
            <div>90.18 %</div>
          </Education>
        </div>
      </div>
    );
  }
}
