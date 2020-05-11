import React from 'react';
import { withRouter } from 'react-router-dom';
import MusicBox from './music_box';
// import MusicMap from './music_map/music_map';

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            music: [],
            isNewestFirst: true,
        };

        // this.toggleSortDate = this.toggleSortDate.bind(this);
        // this.handleAlphaSort = this.handleAlphaSort.bind(this);
    }

    // MAP PROPS
    // static defaultProps = {
    //     center: {
    //       lat: 59.95,
    //       lng: 30.33
    //     },
    //     zoom: 11
    // };    

    // componentWillMount() {
    componentDidMount() {
        this.props.fetchMusic();

        // if ("geolocation" in navigator) {
        //     console.log("Available");
        // } else {
        //     console.log("Not Available");
        // }

        // navigator.geolocation.getCurrentPosition(function (position) {
        //     console.log("Latitude is :", position.coords.latitude);
        //     console.log("Longitude is :", position.coords.longitude);
        // });

        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position)
            },
            function (error) {
                    console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }

    // componentWillReceiveProps(newState) {
    // componentDidUpdate(prevState) {
    //     // this.setState({ music: newState.music });
    //     this.setState({ music: prevState.music });
    // }

    handleAlphaSort() {
      let titlesArr = this.props.music.map((m) => {
        return m.title;
      });

      return titlesArr.sort();
    }

    toggleSortDate(e) {
      this.sortByDate();
    }

    sortByDate() {
      const { music } = this.state;
      let sortedMusic = music;
      if (this.state.isNewestFirst) {
        sortedMusic = music.sort((a, b) => a.date < b.date)
      } else {
        sortedMusic = music.sort((a, b) => a.date > b.date);
      };

      this.setState({
        music: sortedMusic,
        isNewestFirst: !this.state.isNewestFirst,
      });
    }

    render() {
        console.log(this.state);
        // console.log(this.props);
        console.log(this.props.music);

        // const { music } = this.state;

        if (this.props.music.length === 0) {
            return (
                <div>
                    There is no Music
                </div>
            );
        } else {
            return (
              <div>
                <div>
                  {/* <button onClick={this.handleAlphaSort}>A-Z</button> */}
                  <button onClick={this.toggleSortDate}>Date</button>
                </div>

                {/* <div>
                  <MusicMap />
                </div> */}

                {/* <br/> */}
                <h2>All Music</h2>
                {/* <br/> */}
                <div>
                  {/* {music.map((m) => ( */}
                    {/* {this.state.music.all.map(m => ( */}
                  {this.props.music.map((m) => (
                    <MusicBox
                      key={m._id}
                      title={m.title}
                      artist={m.artist}
                      genre={m.genre}
                      location={m.location}
                    />
                  ))}
                </div>       
              </div>
            );
        }
    }
}

export default withRouter(Music);


// MAP EXAMPLE
                // <div style={{ height: '100vh', width: '100%' }}>
                //     <GoogleMapReact
                //     bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                //     defaultCenter={this.props.center}
                //     defaultZoom={this.props.zoom}
                //     >
                //     <AnyReactComponent
                //         lat={59.955413}
                //         lng={30.337844}
                //         text="My Marker"
                //     />
                //     </GoogleMapReact>
                // </div> 