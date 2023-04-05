import {AsyncStorage} from 'react-native';


export const storeUser = async (value) => {
    try {
      await AsyncStorage.setItem('user', value)
    } catch (e) {
      console.error(e);
    }
  }

export const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('user')
      return value
    } catch (e) {
      console.error(e);
    }
  }

export const removeUser = async () => {
    try {
      await AsyncStorage.removeItem('user')
    } catch (e) {
      console.error(e);
    }
  }

export const storeBasket = async (value) => {
    try {
      await AsyncStorage.setItem('basket', value)
    } catch (e) {
      console.error(e);
    }
}

export const getBasket = async () => {
    try {
      const value = await AsyncStorage.getItem('basket')
      if(value === null){
        return []
      }
      return value
    } catch (e) {
        console.error(e)
    }
  }

export const updateBasket = async (value) => {
    try {
      await AsyncStorage.mergeItem('basket', value)
    } catch (e) {
      console.error(e)
    }
}

export const emptyBasket = async () => {
    try {
      await AsyncStorage.removeItem('basket')
    } catch (e) {
      console.error(e)
    }
  }
