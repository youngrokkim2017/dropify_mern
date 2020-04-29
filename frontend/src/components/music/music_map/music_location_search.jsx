import React from "react";
/* global google */

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["establishment"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
  }



  render() {
    return (
        <input ref={this.autocompleteInput}  id="autocomplete" placeholder="Drop Location" type="text"></input>
    );
  }
};

export default LocationSearch