import "../static/css/index.css";
import "../static/css/contact.css";
import Layout from "../components/general/Layout";
import Map from "../components/general/Map";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    this.setState({
      isReady: true
    });
  }

  getMailTo = () => {
    let name = "Inquiry from " + document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let phone = document.getElementById("phone").value;
    let url =
      "mailto:priteshjhaveri27@gmail.com?subject=" +
      name +
      " phone/" +
      phone +
      "&" +
      "body=" +
      message;
    return url;
  };

  RedirectURL = e => {
    document.getElementById("send").href = this.getMailTo();
  };

  render() {
    return (
      <Layout>
        <div className="contact-wrapper">
          <h1>
            <span>CONTACT</span>
          </h1>
          <div className="tag">Few ways you can reach out to me..!</div>
          <div className="map col-lg-6">
            <Map />
          </div>
          <div className="contact-form col-lg-6">
            <form>
              <h2>Name</h2>
              <input type="text" className="inputs" id="name" />
              <h2>Message</h2>
              <textarea className="message inputs" id="message" />
              <h2>Phone</h2>
              <input type="text" className="inputs" id="phone" />
              {this.state.isReady ? (
                <a id="send" href="#" onClick={e => this.RedirectURL(e)}>
                  <span>SEND</span>
                </a>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Contact;
