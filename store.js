import { configureStore } from '@reduxjs/toolkit'
import basketReducer, { setupBasket } from './features/basketSlice'
import userReducer, { loginUser } from './features/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer
  },
})


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

