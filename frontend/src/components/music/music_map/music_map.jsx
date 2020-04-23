import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%",
};

class MusicMap extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            // lat: YOUR_LATITUDE,
            lat: 36,
            // lng: YOUR_LONGITUDE,
            lng: -119,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"This is test name"} />
        </Map>
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   //   apiKey: "API_KEY",
// //   apiKey: "process.env.REACT_APP_API_KEY",
//   apiKey: "KEY",
// })(MusicMap);