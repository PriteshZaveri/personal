import "../static/css/index.css";
import $ from "jquery";
import Layout from "../components/general/Layout";
import Content from "../components/general/Content";
import codeBg from "../static/images/code-background.jpg";
import gameBg from "../static/images/gaming-background.jpg";
import singBg from "../static/images/singing-background.jpg";
import movieBg from "../static/images/movie-background.jpg";
import sketchBg from "../static/images/sketch-background.jpg";
import stockBg from "../static/images/stock-background.jpg";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    this.setState({ isReady: true });
    this.myfunc();
  }

  myfunc = () => {
    var dataText = [
      "Programming",
      "Gaming",
      "Singing",
      "Sci-Fi Movies",
      "Sketching",
      "Stock Investments"
    ];
    var bgImages = [codeBg, gameBg, singBg, movieBg, sketchBg, stockBg];

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        document.querySelector(".headline").innerHTML =
          text.substring(0, i + 1) +
          '<span class="typewriter" aria-hidden="true"></span>';

        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 400);
      }
    }

    function StartTextAnimation(i) {
      if (typeof dataText[i] == "undefined") {
        StartTextAnimation(0);
      }

      if (i < dataText[i].length) {
        $("#hero-overlay").css("background-image", "url(" + bgImages[i] + ")");
        typeWriter(dataText[i], 0, function() {
          function clearText() {
            setTimeout(function() {
              var foo = $(".headline")
                .html()
                .replace(
                  '<span class="typewriter" aria-hidden="true"></span>',
                  ""
                );
              if (foo.charAt(foo.length - 1) === ">") {
                var newX = foo.substring(0, foo.length - 4);
              } else {
                var newX = foo.substring(0, foo.length - 1);
              }
              $(".headline").html(
                newX + '<span class="typewriter" aria-hidden="true"></span>'
              );
              if (newX.length > 0) {
                clearText();
              } else {
                StartTextAnimation(i + 1);
              }
            }, 50);
          }
          setTimeout(function() {
            clearText();
          }, 400);
        });
      } else {
      }
    }

    StartTextAnimation(0);
  };

  render() {
    return (
      <Layout>
        <div className="main-container">
          <div className="hero-wrapper">
            <div id="hero-overlay" />
            <div className="text-center">
              <p className="hero-name">
                <span>PRITESH ZAVERI</span>
              </p>
              <p className="headline hero-info" />
            </div>
          </div>
          <Content />
        </div>
      </Layout>
    );
  }
}
export default Index;
