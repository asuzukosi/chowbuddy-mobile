import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false, // if the getUser method does not return null then the user is logged in
  user: {}, // if the getUser method returns,
  userType: null,
  currentLocation: [null, null],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        state.user = action.payload.user
        state.isLoggedIn = true
        state.userType = action.payload.type
        state.currentLocation = [action.payload.longitude, action.payload.latitude]
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

export const isLoggedIn =(state)=> state.user.isLoggedIn;
export const getUserDetails =(state)=> state.user;
export const getUserCurrentLocation =(state)=> state.user.currentLocation;
export const getUserType =(state)=> state.user.userType;

export default userSlice.reducer;