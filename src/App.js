import logo from './logo.svg';
import './App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import React, {useState} from "react";



function App() {

  const[playlistSongs, setPlaylistSongs] = useState([
    {
        id: 1,
        name: "song name",
        artist: "artist",
        album: "album"
    }
  ]);

const[results, setResults] = useState([
  {
      id: 238,
      name: 'Espresso',
      artist: 'Sabrina Carpenter',
      album: 'Some Album'
  },
  {
      id: 239,
      name: 'Another Song',
      artist: 'Another artist',
      album: 'Another album'
  }
]);

  function addSong(newSong){
    setPlaylistSongs((prev) => {
      return [newSong, ...prev];
    })
  }

  return (
    <>
      <h1 className="header">Ja<span className="highlight">mm</span>ing</h1>
      <div className="app">
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="flexContainer">
          <div className="searchResults"> 
            <SearchResults results={results} addSong={addSong} />
          </div>
          <div className="playlist">
            <Playlist songs={playlistSongs} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
