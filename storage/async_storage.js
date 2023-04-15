import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (value) => {
    console.log("About to store user");
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
    console.log("Done storing user");
  }

export const getUser = async () => {
    const value = await AsyncStorage.getItem('user')
    if(value !== null) {
      outputJson = JSON.parse(value);
      return outputJson;
    }
    return "not found";
}

export const setBasket = async (value) => {
  console.log("About to store entire basket");
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem('basket', jsonValue);
  console.log("Done storing entire basket");
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

export const emptyBasket = async () => {
      console.log("About to remove basket");
      await AsyncStorage.removeItem('basket');
      console.log("Done storing basket");
  }


// export const removeUser = async () => {
//     try {
//       await AsyncStorage.removeItem('user')
//     } catch (e) {
//       console.error(e);
//     }
//   }

// export const storeBasket = async (value) => {
//     try {
//       await AsyncStorage.setItem('basket', value)
//     } catch (e) {
//       console.error(e);
//     }
// }



// export const updateBasket = async (value) => {
//     try {
//       await AsyncStorage.mergeItem('basket', value)
//     } catch (e) {
//       console.error(e)
//     }
// }

