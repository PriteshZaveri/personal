import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 19.2182556,
      lng: 72.8520227
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "58vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDD1mT0FHnOzS4zsAfTGIif8irskf0_J9k" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={19.2182556}
            lng={72.8520227}
            text={
              <i
                className="fas fa-map-marker-alt"
                style={{ fontSize: "4em", color: "maroon" }}
              />
            }
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
