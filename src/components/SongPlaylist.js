
// the useDispatch is used for action creator
// useSelector is used to reach up to the redux store and access the state from it
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store";

import { createRandomSong } from "../data";

function SongPlaylist() {
  // the dispatch function is used for updating the state
  // the state are inside the store
  const dispatch = useDispatch();



  // state are the all of the state inside the redux store
  const songPlaylist = useSelector((state) => {
    // here we return only that state we want to access
    return state.songs;
  });




  const handleSongAdd = (song) => {
    // below are action creator
    // here the song is the payload that we are passing to it
    dispatch(addSong(song));
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;








// accessing the state 
// following are the steps to access the state
// 1) find the component that needs to acceess some state
// 2) import the 'useSelector' hook from 'react-redux'
// 3) call the hook passing in a selector function
// 4) use the state! anytime state changes the component will automatically rerender
