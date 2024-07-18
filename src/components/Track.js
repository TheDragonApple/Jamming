import React from "react";

function Track(){
    return (
    <li className="track">
        <div className="song-details">
            <h3>Song title</h3>
            <p>Artist | album</p>
        </div>
        <button className="add-btn">+</button>
      </li>
    );
}

export default Track;