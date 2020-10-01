import React from 'react';

class LyricsForm extends React.Component {
    render() {
        return(  
            <form className="enter-lyrics">
                <input type='text' name='lyrics' placeholder="Enter Your Lyrics Here"/>
                <button type='submit' className="enter-lyrics__button">Submit</button>
            </form>
        )
    }
}

export default LyricsForm;