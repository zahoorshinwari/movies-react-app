import { createSlice } from "@reduxjs/toolkit";
import { reset } from '../actions'


// slices can define the initial state
// combine the small reducers function into the big reducer
// create a set of action creator function
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



  export const { addMovie, removeMovie } = moviesSlice.actions
  
  // export the combined reducer
  export const moviesReducer = moviesSlice.reducer