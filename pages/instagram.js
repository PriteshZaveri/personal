import "../static/css/index.css";
import Layout from "../components/general/Layout";
import Insta from "../components/general/Insta";
import "../static/css/insta.css";

class Instagram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Layout>
        <div className="insta-wrapper">
          <h1>
            <span>MY INSTAGRAM</span>
          </h1>
          <div className="tag">
            Few Memories from my life I'd like to share...
          </div>
          <Insta />
        </div>
      </Layout>
    );
  }
}
export default Instagram;
