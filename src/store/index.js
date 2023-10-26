import { configureStore } from "@reduxjs/toolkit";

import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";







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
    songs: songReducer,
    movies: moviesReducer
  }
});


// export the store that we can use it in other components 
export { store };

// this is action creator
// the songSlice.actions can take all the reducer actions
// reducer actions means updating the state
// songSlice.actions can access all of the reducer action 
export { addSong, removeSong, addMovie, removeMovie }





















// it can show us the exact reducer and their type
// and also the payload
// console.log(songSlice.actions.addSong("some songs!!"))

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// the below are the action that can be done by reducer addSong
// store.dispatch(songSlice.actions.addSong("some songs"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));




























// REDUX:
// redux is the javscript library which is used for the state management.

// redux can work same like the useReducer

// in redux there is also action , dispatch fuction, reducer , and the new state.
// In redux there is the redux store which has dispatch function,  action,reducer,and new state.
// there is multiple reducer in it








// changing state using redux 
// the below are the steps that they follow:
// 1) add a reducer to one of your slices that changes state in some particular way
// 2) export the action creator that the slice automatically creates
// 3) find the component that you want to dispatch from
// 4) import the action creator function and 'useDispatch' from react redux
// 5) call the useDispatch hook to get access to the dispatch function
// 6) when the user does something, call the action creator to get an action, then dispatch it 