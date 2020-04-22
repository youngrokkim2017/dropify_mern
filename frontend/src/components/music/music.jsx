import React from 'react';
import { withRouter } from 'react-router-dom';
import MusicBox from './music_box';

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
    }

    // componentWillReceiveProps(newState) {
    // componentDidUpdate(prevState) {
    //     // this.setState({ music: newState.music });
    //     this.setState({ music: prevState.music });
    // }

    render() {
        // console.log(this.state);
        console.log(this.props.music[0]);

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
                    <h2>All Music</h2>
                    {this.props.music.map(m => (
                    // {this.state.music.all.map(m => (
                        <MusicBox key={m._id} title={m.title} artist={m.artist} genre={m.genre} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Music);