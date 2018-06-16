import React from "react";

export default class Workex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="work-wrapper col-lg-12">
        <div className="col-lg-3 left-pane">
          <div className="desig">{this.props.designation}</div>
          <div className="duration">{this.props.duration}</div>
        </div>
        <div className="col-lg-9 right-pane">
          <div className="title">{this.props.company}</div>
          <div className="desc">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
