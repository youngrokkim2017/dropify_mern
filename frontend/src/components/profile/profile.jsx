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
        if (this.state.music.length === 0) {
            return(
                <div>
                    This user has no Music
                </div>
            );
        } else {
            return (
                <div>
                    <h2>All of this User's Music</h2>
                    {this.state.music.map(m => (
                        <MusicBox key={m._id} title={m.title} artist={m.artist} genre={m.genre} />
                    ))}
                </div>
            );
        };
    }
}

export default Profile;