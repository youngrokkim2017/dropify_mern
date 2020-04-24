import React from 'react';
import { withRouter } from 'react-router-dom';
import MusicBox from './music_box';
// import MusicMap from './music_map/music_map';

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            music: []
        };
    }

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

    render() {
        // console.log(this.state);
        console.log(this.props);

        // if (this.state.music.length === 0) {
        if (this.props.music.length === 0) {
            return (
                <div>
                    There is no Music
                </div>
            );
        } else {
            return (
              <div>
                {/* <div>
                  <MusicMap />
                </div> */}
                {/* <br/> */}
                <h2>All Music</h2>
                {/* <br/> */}
                <div>
                  {this.props.music.map((m) => (
                    // {this.state.music.all.map(m => (
                    <MusicBox
                      key={m._id}
                      title={m.title}
                      artist={m.artist}
                      genre={m.genre}
                    />
                  ))}
                </div>
              </div>
            );
        }
    }
}

export default withRouter(Music);