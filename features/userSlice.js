// Import redux toolkit for initalizing the store
import { createSlice } from '@reduxjs/toolkit'

// Set up the initial state of the store
const initialState = {
  isLoggedIn: false, // if the getUser method does not return null then the user is logged in
  user: {}, // if the getUser method returns,
  userType: null,
  currentLocation: [null, null],
}

// Create the user slice for storing user information
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // This is the reducer to login the user, which is synonymous with setting the current user
    loginUser: (state, action) => {
        state.user = action.payload.user
        state.isLoggedIn = true
        state.userType = action.payload.type
        state.currentLocation = [action.payload.longitude, action.payload.latitude]
    },
    // This is the reducer to logout the user, this is equivalent to removing the current user
    logoutUser: (state, action) => {
        state.user = {}
        state.isLoggedIn = false
        state.userType = null
        state.currentLocation = null
    },
    // This is the reducer to get the current location of the user from the store
    setCurrentLocation: (state, action) => {
        state.currentLocation = action.payload.location
    },

    // These are reducers for following and unfollowing certain user
    // this was implemented for future versions of the application
    followUser: (state, action) => {},
    unfollowUser: (state, action) => {},
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, setCurrentLocation } = userSlice.actions;

// This is the action to check if a user is logged in
export const isLoggedIn =(state)=> state.user.isLoggedIn;
// This is the action to get the current user logged in on the application
export const getUserDetails =(state)=> state.user;
// This is used to get the current user location
export const getUserCurrentLocation =(state)=> state.user.currentLocation;
// This is used to get the user type of the currently logged in user i.e customer, restaurant, deliverer
export const getUserType =(state)=> state.user.userType;

export default userSlice.reducer;