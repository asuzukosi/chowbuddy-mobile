// Import the redux methods to create slices
import { createSlice } from '@reduxjs/toolkit'

// We will setup our initial state of our store
const initialState = {
  items: [],
}

// This is used to create the slice for our basket store
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // This method is used to add to an item to our basket store
    addToBasket: (state, action) => {
      console.log("Adding to basket: " + action.payload);
      state.items  = [...state.items, action.payload];
      console.log("Added to basket: " + action.payload);
    },
    // This is used to setup the basket infromation from preloaded information
    setupBasket: (state, action) => {
      console.log("Setting up basket: " + action.payload);
      state.items = action.payload;
      console.log("Done setting up basket: " + action.payload);
    },

    // This is used to remove an item from the basket
    removeFromBasket: (state, action) => {
        console.log("Removing from basket: " + action.payload);
        let idx = state.items.findIndex(item => item.id === action.payload.id);
        if (idx >= 0) {
          let removed = state.items.splice(idx, 1);
          console.log("Removed from basket: " + removed);
        }
        console.log("Done adding item to basket")
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, setupBasket } = basketSlice.actions;
// get entire basket
export const selectEntireBasket =(state)=> state.basket.items;

// get all dishes in basket for a particular resturant
export const getAllDishesForRestaurant = (state, restaurantId)=> {
   return state.basket.items.filter(item => item.restaurant.id == restaurantId)
}

// get number of dishes in basket for a particular restaurant
export const getNumberOfDishesForRestaurant = (state, restaurantId) => {
  const numberOfDishes = state.basket.items.filter(item => item.restaurant.id === restaurantId)
  return numberOfDishes.length
}

// get number of instances of dish in basket
export const getNumberOfDishes = (state, dishId) =>  {
  const numberOfDishes = state.basket.items.filter(item => item.id === dishId)
  return numberOfDishes.length
}

// calculate total price of items in basket
export const calculateBasketTotalPrice = (state) => {
    if(state.basket.items.length < 1){
        return 0.00
    }
    let total = 0;
    state.basket.items.forEach(item => {
        let number = item.price
        number = parseFloat(number);
        total += number;
    })
    return total.toFixed(2)
}

// Get the items in the basket grouped by meal
export const getGroupedItems = (state) => {
  // const uniqueItems = [...new Set(state.basket.items)]
  const uniqueItems = []
  const uniqueIds = []
  state.basket.items.forEach(item => {
    if (uniqueIds.indexOf(item.id) == -1){
      uniqueIds.push(item.id)
    }
  })

  console.log(uniqueIds)
  uniqueIds.forEach(id => {
    const items = state.basket.items.filter(item => item.id === id)
    let newItem = {
      ...items[0],
      count: items.length
    }
    uniqueItems.push(newItem)
  })

  return uniqueItems
}

export default basketSlice.reducer;