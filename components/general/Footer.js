import React from "react";
import "../../static/css/footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <div className="copy">Pritesh Zaveri &copy;. All Rights Reserved</div>
        <div className="social">
          <a
            href="https://www.facebook.com/R3v0luTiOnX"
            title="facebook"
            target="_blank"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href="https://www.instagram.com/pritesh.zaveri/"
            title="instagram"
            target="_blank"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/pritesh-zaveri-698152ba/"
            title="linkedin"
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto:priteshjhaveri27@gmail.com" title="email">
            <i className="fa fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}
