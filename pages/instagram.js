import "../static/css/index.css";
import Layout from "../components/general/Layout";
import Insta from "../components/general/Insta";

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
        <Insta />
      </Layout>
    );
  }
}
export default Instagram;
