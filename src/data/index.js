import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    }
  }
});

// store is the object that has all of our state of our application
const store = configureStore({
  reducer: {
    songs: songSlice.reducer
  }
});

console.log(store);
