import logo from './logo.svg';
import './App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import React, {useState} from "react";
import { search, getAccessToken, savePlaylist } from './util/Spotify';


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

]);

  function addSong(newSong){
    setPlaylistSongs((prev) => {
      return [newSong, ...prev];
    })
  }

  function removeSong(oldSong){
    setPlaylistSongs((prev) => {
      const oldSongIndex = prev.findIndex((currValue) => {
        return oldSong === currValue;
      });
      return prev.filter((value, index) => {
        return index !== oldSongIndex;
      })
    })
  }


   function handleSearch(term){
    var resultArray;
    search(term).then((resolve) => {
      resultArray = resolve;
      for (let index in resultArray){
        setResults((prev) => {
          console.log();
          return [resultArray[index], ...prev];
        })
      }
    }).catch((error) => {
      return console.log(error);
    })
  };

  function handlePlaylistSave(){
    var uriArray = [];
    for(let index in playlistSongs){
      uriArray.push(playlistSongs[index].uri);
    }
    savePlaylist(uriArray, "test");
  }

  return (
    <>
      <h1 className="header">Ja<span className="highlight">mm</span>ing</h1>
      <div className="app">
        <div className="login-container">
          <button id="login" onClick={getAccessToken}>LOGIN TO SPOTIFY</button>
        </div>
        <div className="searchbar">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flexContainer">
          <div className="searchResults"> 
            <SearchResults results={results} addSong={addSong} />
          </div>
          <div className="playlist">
            <Playlist onSave={handlePlaylistSave} songs={playlistSongs} removeSong={removeSong} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
