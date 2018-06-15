import React from "react";

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let score = this.props.width;
    let skillClass;
    if (score >= 80) {
      skillClass = "pro";
    } else if (score >= 60 && score < 80) {
      skillClass = "good";
    } else if (score >= 40 && score < 60) {
      skillClass = "amateur";
    } else if (score >= 0 && score < 40) {
      skillClass = "beginner";
    }
    return (
      <div className="graph-wrapper col-lg-12">
        <div className="label col-lg-3">{this.props.label}</div>
        <div className="col-lg-9 bar-wrapper">
          <div
            className={"bar " + skillClass}
            style={{
              width: `${this.props.width}%`,
              backgroundImage: this.props.color1
            }}
          />
        </div>
      </div>
    );
  }
}
