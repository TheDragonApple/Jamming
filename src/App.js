import logo from './logo.svg';
import './App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';

function App() {

  return (
    <>
      <h1 className="header">Ja<span className="highlight">mm</span>ing</h1>
      <div className="app">
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="flexContainer">
          <div className="searchResults"> 
            <SearchResults />
          </div>
          <div className="playlist">
            <Playlist />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
