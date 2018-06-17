import "../static/css/index.css";
import "../static/css/news.css";
import Layout from "../components/general/Layout";
import News from "../components/general/News";
import helper from "../components/helpers/helpers";

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  static async getInitialProps({ req, query }) {
    return helper.getNews();
  }

  componentDidMount() {}

  render() {
    return (
      <Layout>
        <News articles={this.props.articles} />
      </Layout>
    );
  }
}
export default Trending;
