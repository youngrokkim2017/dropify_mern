import React from 'react';

class MusicBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h3>{this.props.artist}</h3>
                <h3>{this.props.genre}</h3>
            </div>
        );
    };
};

export default MusicBox;

// also want to render additional info
// ie. username and datetime