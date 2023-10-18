import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      // this state is not overall state
      // this state is only for this reducer addSong

      // state is not the big state object
      // in the store
      // it is the piece of state managed
      // by this reducer
      state.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

// store is the object that has all of our state of our application
const store = configureStore({
  reducer: {
    // .reducer is the function that take
    // all the reducer of the application
    // and take it from the songSlice function
    // which are create by createslice
    // all of the reducer are present in reducers object

    // the below are used to co nnect the slices
    // to the reducer
    songs: songSlice.reducer,
    movies: moviesSlice.reducer
  }
});

export { store };

// this is action creator
export const { addSong, removeSong } = songSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;

// it can show us the exact reducer and their type
// and also the payload
// console.log(songSlice.actions.addSong("some songs!!"))

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// the below are the action that can be done by reducer addSong
// store.dispatch(songSlice.actions.addSong("some songs"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
