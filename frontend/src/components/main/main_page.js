import React from 'react';
// import MusicBox from '../music/music_box';

class MainPage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     this.props.fetchMusic();
    // }

    render() {
        // console.log(this.props);
        
        return (
            <div>
                {/* <h1>A music drop app</h1> */}
                <div>
                    <h2>Recent</h2>
                    {/* <div>
                        {this.props.music.map((m) => (
                            <MusicBox
                            key={m._id}
                            title={m.title}
                            artist={m.artist}
                            genre={m.genre}
                            />
                        ))}
                    </div> */}
                </div>
                <footer>
                    Copyright &copy; 2020
                </footer>
            </div>
        );
    }
}

export default MainPage;