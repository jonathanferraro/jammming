import React from 'react';
import './Playlist.css';

export class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <p>ADD TRACKLIST COMPONENT HERE!!!!!!!!!!!!!!!!</p>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}