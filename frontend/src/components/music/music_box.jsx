import React from 'react';
import '../../stylesheets/music_index_item.scss';

class MusicBox extends React.Component {
    render() {
        // table sorting
        
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h3>{this.props.artist}</h3>
                <h3>{this.props.genre}</h3>
                <h3>{this.props.location}</h3>
                {/* <h3>{this.props.user}</h3> */}
                <table>
                    <thead></thead>
                    <tr>
                        {/* <th>{this.props.title}</th>
                        <th>{this.props.artist}</th>
                        <th>{this.props.genre}</th> */}
                        {/* <th>{this.props.location}</th> */}
                    </tr>
                </table>
            </div>
        );
    };
};

export default MusicBox;

// also want to render additional info
// ie. username and datetime