import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class LocationSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: '' };
    }
 
    handleChange = location => {
        this.setState({ location });
    };
 
    handleSelect = location => {
        geocodeByAddress(location)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };
 
    render() {
        return (
            <PlacesAutocomplete
                value={this.state.location}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
                <input
                    {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                    })}
                />

                <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                    const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';

                // inline style for demonstration purpose
                    const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    
                    return (
                        <div
                        {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                        })}
                        >
                        <span>{suggestion.description}</span>
                        </div>
                    );
                })}
                </div>
            </div>    
            )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearch;

// import React from "react";
// /* global google */

// class LocationSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.autocompleteInput = React.createRef();
//     this.autocomplete = null;
//     this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
//   }

//   componentDidMount() {
//     this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
//         {"types": ["establishment"]});

//     this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
//   }

//   handlePlaceChanged(){
//     const place = this.autocomplete.getPlace();
//     // this.props.onPlaceLoaded(place);
//     this.props.onPlaceLoad(place);
//   }



//   render() {
//     return (
//         <input ref={this.autocompleteInput}  id="autocomplete" placeholder="Drop Location" type="text"></input>
//     );
//   }
// };

// export default LocationSearch;