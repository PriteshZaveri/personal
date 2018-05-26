import "../static/css/index.css";
import Layout from "../components/general/Layout";
import Home from "../components/general/Home";

class Index extends React.Component {
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
        <Home />
      </Layout>
    );
  }
}
export default Index;
