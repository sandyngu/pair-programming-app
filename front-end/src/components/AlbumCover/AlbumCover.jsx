import React from 'react';

function AlbumCover(props) {
    return(
        <img src={props.lyrics[0].albumCover} />
    )
}

export default AlbumCover;