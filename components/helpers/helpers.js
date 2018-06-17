import $ from "jquery";
import axios from "axios";

let helper = {};

var url =
  "https://newsapi.org/v2/top-headlines?" +
  "sources=techcrunch&" +
  "apiKey=446fb20720e74f7590d0f641a5d74b04";

helper.getNews = () => {
  return axios.get(url).then(res => {
    return res.data;
  });
};

export default helper;
