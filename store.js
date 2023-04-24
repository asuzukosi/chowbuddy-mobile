// Import redux toolkit and the reducers to be used in our application
import { configureStore } from '@reduxjs/toolkit'
import basketReducer, { setupBasket } from './features/basketSlice'
import userReducer, { loginUser } from './features/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Setup the store to be used by redux in our application
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer
  },
})

// Initialize user data from the async storage
const initUserData = async () => {
  const value = await AsyncStorage.getItem('user')
  if(value === null){
    console.log('User not found');
    return
  }
  const outputJson = JSON.parse(value);
  console.log("data in store is", outputJson);
  store.dispatch(loginUser(outputJson));
}

// Initalize basket data from the async storage
const initBasketData = async () => {
  const value =  await AsyncStorage.getItem('basket')
  if(value === null){
    console.log('Basket not found');
    return
  }
  const outputJson = JSON.parse(value);
  console.log("data in store is", outputJson);
  store.dispatch(setupBasket(outputJson));
}

// initUserData()
// initBasketData()

