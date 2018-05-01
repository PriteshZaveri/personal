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
                          <b>Career Highlights</b>
                          <br />
                          1) Created 7 independent Automation utilities that
                          resulted in more than 8000 hrs and $750,000 worth of
                          savings in 1 financial year which was highly
                          appreciated by the client.<br />
                          2) Won start employee of the month twice in 8 months.<br />
                          3) Created a Website independently from scratch that
                          served as a Dashboard for team management. The website
                          is hosted on AWS and has proven to be beneficial to
                          the team. The Dashboard is even demonstrated to
                          various Accenture MDs and got highly appreciated for
                          it. Also a part of the team that created a chat bot
                          called MITR.
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-briefcase" />
                        <span className="title">Media.Net</span>
                        <span className="designation">UI Developer</span>
                        <span className="duration">Dec 2017 - PRESENT</span>
                        <span className="experience">
                          Currently working as a Frontend Developer on multiple
                          projects primarily using Javascript frameworks such as
                          React.Js, Node.Js etc. along with HTML5, CSS3 and
                          Jquery.<br />The work also involves creating many
                          frontend elements such as Emailers, Landing pages and
                          Search Engine Results Page.
                          <br />
                          <b>Websites currently built:</b> mobilesinsider.com,
                          laptopsinsider.com, tvsinsider.com,
                          degreescompared.com
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-briefcase" />
                        <span className="title">Free Lancing</span>
                        <span className="designation">Web Developer</span>
                        <span className="duration">Sept 2015 - PRESENT</span>
                        <span className="experience">
                          I have been freelancing since college to make websites
                          and android apps.<br />
                          <b>Websites:</b> page3manali.in, zestchocolates.com,
                          vowexhibitonandevents.com<br />
                          <b>Apps:</b> Random - Quartifex (on Playstore)
                        </span>
                      </li>
                    </ul>
                    <h2>Education</h2>
                    <ul className="worklist">
                      <li>
                        <i className="fas fa-graduation-cap" />
                        <span className="title">
                          Bachelor of Engineering - I.T
                        </span>
                        <span className="designation">
                          K.J.Somaiya College of Engineering
                        </span>
                        <span className="duration">Aug 2012 - Jun 2016</span>
                      </li>
                      <li>
                        <i className="fas fa-graduation-cap" />
                        <span className="title">H.S.C</span>
                        <span className="designation">Mithibai College</span>
                        <span className="duration">Feb 2012</span>
                      </li>
                      <li>
                        <i className="fas fa-graduation-cap" />
                        <span className="title">S.S.C</span>
                        <span className="designation">
                          St. Xavier's High School
                        </span>
                        <span className="duration">Mar 2010</span>
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
