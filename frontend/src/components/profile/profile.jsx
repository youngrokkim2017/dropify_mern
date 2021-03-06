import React from 'react';
import MusicBox from '../music/music_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            music: []
        }
    }

    // componentWillMount() {
    componentDidMount() {
        console.log(this.props.currentUser.id);
        this.props.fetchUserMusic(this.props.currentUser.id);
    }

    // componentWillReceiveProps(newState) {
    // componentDidUpdate(prevState) {
    //     // this.setState({ music: newState.music });
    //     this.setState({ music: prevState.music });
    // }

    render() {
        console.log(this.props);

        // if (this.state.music.length === 0) {
        if (this.props.music.length === 0) {
            return(
                <div>
                    {this.props.currentUser.handle} has no Music
                </div>
            );
        } else {
            return (
                <div>
                    <h2>All of {this.props.currentUser.handle}'s Music</h2>
                    {this.props.music.map(m => (
                    // {this.state.music.map(m => (
                        <MusicBox key={m._id} title={m.title} artist={m.artist} genre={m.genre} />
                    ))}
                </div>
            );
        };
    }
}

export default Profile;