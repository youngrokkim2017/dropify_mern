import React from 'react';
// import { Link } from "react-router-dom";
// import NavBar from '../nav/navbar';
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
                {/* <Link to={'/'}><h1>APP NAME</h1></Link> */}
                {/* <h1>A music drop app</h1> */}
                {/* <div>
                    <NavBar />
                </div> */}
                {/* <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div> */}
                <div>
                    {/* <h2>Recent</h2> */}
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