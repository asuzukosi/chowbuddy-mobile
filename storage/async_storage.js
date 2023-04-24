// Import async storage class from the react native async storage library
import AsyncStorage from '@react-native-async-storage/async-storage';


// The store user function that is used to read user data as a json object adn store it in async storage
export const storeUser = async (value) => {
    console.log("About to store user");
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
    console.log("Done storing user");
  }


// This function is used to read user data from async storage and convert to json object
export const getUser = async () => {
    const value = await AsyncStorage.getItem('user')
    if(value !== null) {
      outputJson = JSON.parse(value);
      return outputJson;
    }
    return "not found";
}

// This function is used to store basket information in the async storage
export const setBasket = async (value) => {
  console.log("About to store entire basket");
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem('basket', jsonValue);
  console.log("Done storing entire basket");
}


// This function is used to read basket information from the async storage
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


// This function is used to remove basket information from the async storage
export const emptyBasket = async () => {
      console.log("About to remove basket");
      await AsyncStorage.removeItem('basket');
      console.log("Done removing basket");
  }


// This function is used to remove user information from the async storage i.e logout a user
export const removeUser = async () => {
  console.log("About to remove user");
  await AsyncStorage.removeItem('user');
  console.log("Done removing user");
}

