import React from "react";
import Instafeed from "react-instafeed";

export default class Insta extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const instafeedTarget = "instafeed";
    return (
      <div id={instafeedTarget}>
        <Instafeed
          limit="25"
          ref="instafeed"
          resolution="standard_resolution"
          sortBy="most-recent"
          target={instafeedTarget}
          template={`<a href='{{link}}' target='_blank' class='instafeed__item'>
            <img class='instafeed__item__background' src='{{image}}' />
              <div class='instafeed__item__overlay'>
                <div class='instafeed__item__overlay--inner'>
                  <p class='instafeed__item__caption'>{{model.short_caption}}</p>
                  <p class='instafeed__item__location'>{{location}}</p>
                  <p class='instafeed__item__likes'>{{likes}}</p>
                </div>
              </div>
          </a>`}
          userId="self"
          // clientId="700c0f8a8f0247edbfd55b43ae83d781"
          accessToken="224980305.700c0f8.7036fef694dc4a72a1c630e3bf002b0a"
        />
      </div>
    );
  }
}
