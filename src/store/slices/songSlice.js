import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";


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
        
        // splice is built in function that remove the object from an array
        state.splice(index, 1);
      }
    },
  
    // builder can tell our combined reducer to watch about some additional action types 
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    }
  });
  

  export const { addSong, removeSong } = songSlice.actions

  // export the combine reducer
  export const songReducer = songSlice.reducer

