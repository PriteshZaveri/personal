import React from "react";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      articles: this.props.articles
    });
  }

  getNewsSection = data => {
    let articles = data.map(article => {
      return (
        <div className="article col-lg-6">
          <a href={article.url} title={article.title} className="article-inner">
            <img src={article.urlToImage} />
            <p className="heading">{article.title}</p>
          </a>
        </div>
      );
    });
    return articles;
  };

  render() {
    let news = this.state.articles
      ? this.getNewsSection(this.state.articles)
      : [];
    return (
      <div className="news-wrapper">
        <h1>
          <span>TRENDING</span>
        </h1>
        <div className="tag">
          See What's trending in the Tech industry around the world...!
        </div>
        <div className="news-section">{news}</div>
        <div style={{ textAlign: "center" }}>
          This feed is powered by <a href="https://newsapi.org">NewsApi.org</a>
        </div>
      </div>
    );
  }
}
