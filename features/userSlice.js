import { createSlice } from '@reduxjs/toolkit'
import { getUser } from '../storage/async_storage'

const initialState = {
  isLoggedIn: getUser() !== null, // if the getUser method does not return null then the user is logged in
  user: getUser(),
  userType: getUser().type,
  currentLocation: [getUser().longitude, getUser().latitude],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        state.user = action.payload.user
        state.isLoggedIn = true
        state.userType = action.payload.type
        state.currentLocation = action.payload.location
    },
    logoutUser: (state, action) => {
        state.user = {}
        state.isLoggedIn = false
        state.userType = null
        state.currentLocation = null
    },
    setCurrentLocation: (state, action) => {
        state.currentLocation = action.payload.location
    },
    followUser: (state, action) => {},
    unfollowUser: (state, action) => {},
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, setCurrentLocation } = userSlice.actions;

export const isLoggedIn =(state)=> state.isLoggedIn;
export const getUserDetails =()=> state.user;
export const getUserCurrentLocation =()=> state.currentLocation;
export const getUserType =()=> state.userType;

export default userSlice.reducer;