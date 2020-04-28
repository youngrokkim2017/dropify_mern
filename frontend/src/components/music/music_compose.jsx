import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import MusicBox from './music_box';

class MusicCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            artist: '',
            genre: '',
            newMusic: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    // componentDidUpdate(prevProps) {
    //     // this.setState({ newMusic: nextProps.newMusic.title });
    //     // this.setState({ newMusic: prevProps.newMusic.title });
    // }

    handleSubmit(e) {
        e.preventDefault();

        let music = {
            title: this.state.title,
            artist: this.state.artist,
            genre: this.state.genre
        };

        this.props.composeMusic(music);
        this.setState({
            title: '',
            artist: '',
            genre: '',
        });
    }

    update(type) {
        return e => this.setState({
            // text: e.currentTarget.value
            // title: e.currentTarget.value
            [type]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="textarea"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Title"
                        />
                        <br/>
                        <input
                            type="textarea"
                            value={this.state.artist}
                            onChange={this.update('artist')}
                            placeholder="Artist"
                        />
                        <br/>
                        <input
                            type="textarea"
                            value={this.state.genre}
                            onChange={this.update('genre')}
                            placeholder="Genre"
                        />
                        <br/>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br/>
                <MusicBox text={this.state.newMusic} />
            </div>
        );
    }
};

export default MusicCompose;