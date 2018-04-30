import React from "react";
import Waypoint from "react-waypoint";
import $ from "jquery";

export default class Content extends React.Component {
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
    setTimeout(
      () => {
        console.log(animation, animationName);
        this.state[animation] === true
          ? null
          : $("." + animation).addClass("animated " + animationName),
          this.setState({ [animation]: true });
      },
      100,
      animation,
      animationName
    );
  };
  render() {
    return (
      <div>
        <div className="container-fluid content-wrapper">
          <div className="content-info container">
            <Waypoint
              onEnter={() => this.handleAnimation("animation1", "fadeInLeft")}
            />
            <div className="animation1 title-holder">My Expertise</div>
            <div className="row">
              <Waypoint
                onEnter={() => this.handleAnimation("animation2", "fadeIn")}
              />
              <div className="animation2 col-sm-12 col-md-4">
                <div className="col-content">
                  <i className="fa fa-code" />
                  <h2>Code</h2>
                  <p>
                    I design browser based websites with HTML5 CSS3 and
                    Javascript. I love coding things from scratch and can also
                    work with many javascript frameworks.
                  </p>
                </div>
              </div>
              <div className="animation2 col-sm-12 col-md-4">
                <div className="col-content">
                  <i className="fas fa-magic" />
                  <h2>UX/UI</h2>
                  <p>
                    UI/UX involves planning and iterating a site's structure and
                    layout.I focus more on content structure, intuitive UI
                    patterns and simple interactions.
                  </p>
                </div>
              </div>
              <div className="animation2 col-sm-12 col-md-4">
                <div className="col-content">
                  <i className="fas fa-code" />
                  <h2>Strategy</h2>
                  <p>
                    I collaborate with clients to nurture and transform ideas
                    into well thought out design specs. After all, that's where
                    the majority of amazing user experiences start.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-info jumbotron container-fluid">
            <Waypoint
              onEnter={() => this.handleAnimation("animation3", "fadeInLeft")}
            />
            <div className="container">
              <div className="animation3 title-holder container">About Me</div>
              <div className="row">
                <Waypoint
                  onEnter={() => this.handleAnimation("animation4", "fadeIn")}
                />
                <div className="animation4 col-sm-12">
                  <div className="col-content">
                    <h2>Work</h2>
                    <ul className="worklist">
                      <li>
                        <i className="fas fa-briefcase" />
                        <span className="title">Accenture</span>
                        <span className="designation">
                          Application Development Analyst
                        </span>
                        <span className="duration">Aug 2016 - Dec 2017</span>
                        <span className="experience">
                          Trained in SAP Sales and Distribution module. Worked
                          on various technologies in different domains such as
                          Automation initiatives and products based on
                          Artificial Intelligence.<br />
                          Career Highlights
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-briefcase" />
                        <span className="title">Media.Net</span>
                        <span className="designation">UI Developer</span>
                        <span className="duration">Dec 2017 - PRESENT</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
