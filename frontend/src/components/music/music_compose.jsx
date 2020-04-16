import React from 'react';
import MusicBox from './music_box';

class MusicCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            authhor: '',
            genre: '',
            newMusic: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newMusic: nextProps.newMusic.title });
    }

    handleSubmit(e) {
        e.preventDefault();

        let music = {
            title: this.state.title,
            author: this.state.author,
            genre: this.state.genre
        };

        this.props.composeMusic(music);
        this.setState({ text: '' });
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
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
                            onChange={this.update()}
                            placeholder="Drop your music..."
                        />
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