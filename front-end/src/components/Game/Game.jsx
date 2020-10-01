import React from 'react';
import axios from 'axios';
import LyricsForm from '../LyricsForm/LyricsForm';
import Lyrics from '../Lyrics/Lyrics';
import audio from '../../assets/audio/file_example_MP3_700KB.mp3';

class Game extends React.Component {

    state = {
        lyrics: [] 
    }

    componentDidMount() {
        axios.get("/")
            .then(res => {
                console.log(res)
                this.setState({
                })
            })
    }

    render() {
        return(
            <div className="game">
                <h1 className="game__title">Welcome to <br/>Baby Got Track</h1>
                <audio controls src={audio}></audio>
                <Lyrics lyrics={this.state.lyrics}/>
                <LyricsForm />
            </div>
        )
    }
}

export default Game;