import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1 className="header">Ja<span className="highlight">mm</span>ing</h1>
      <div className="app">
        <div className="searchbar">
          <input type="text" value="Enter A Song Title"></input>
          <button id="srch-btn" type="submit">SEARCH</button>
        </div>
        <div className="flexContainer">
          <div className="searchResults"> 
            <h2>Results</h2>
            <div className="tracklist">
              <ul>
                <li className="track">
                  <div className="song-details">
                    <h3>Song title</h3>
                    <p>Artist | album</p>
                    </div>
                  <button className="add-btn">+</button>
                </li>
                <li className="track">
                  <div className="song-details">
                    <h3>Song title</h3>
                    <p>Artist | album</p>
                  </div>
                  <button className="add-btn">+</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="playlist">
            <input type="text" value="New Playlist"></input>
            <button id="spotify-btn">SAVE TO SPOTIFY</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
