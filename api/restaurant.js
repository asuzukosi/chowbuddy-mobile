import axios from 'axios'
import BASE_URL from './base'

// This is a function to get all the restaurants available on the API
export const getAllRestaurants = async (category=null) => {
   let requestString = BASE_URL + '/restaurants/'
   // based on whether a category is being passed the request string should be formatted
   if(category !== null  && category !== "" && category !== []){
      requestString = BASE_URL + '/restaurants/?categories=' + category
   }else {
      requestString = BASE_URL + '/restaurants/'
   }
   const restaurants = await axios.get(requestString).then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error);
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   return restaurants
}

// This is a function to get information about a specific restaurant from the API
export const getSpecificRestaurant = async(id)=>{
   let requestString = BASE_URL + '/restaurants/' + id + '/'
   const restaurant = await axios.get(requestString).then((resposne)=>{
            return resposne.data
   }).catch((error)=>{
            console.error(error);
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
   });

   return restaurant;
}

// This is a function to search restaurants on the API
export const searchAllRestaurants = (query) => {
   console.log("Calling search")
   const restaurants = axios.get(BASE_URL+"/restaurants/?search="+query)
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error);
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   return restaurants
}

// Get all dishes for a particular restuarant
export const getAllDishesForRestaurant = (restaurantID) => {
   console.log("MAKING REQUEST FOR DISHES")
   const dishes = axios.get(BASE_URL+"/restaurants/"+restaurantID+"/dishes/")
         .then((resposne)=>{
            console.log("DISHES ARE ", resposne.data)
            return resposne.data
         })
         .catch((error)=>{
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   
   return dishes
}


// This is a function used to create a new order on the API
export const makeOrder = async (dishorders, restaurantID, custoemrId, delivererId) =>{
   const order = await axios.post(BASE_URL+"/mealorders/create_order/", {dishorders: dishorders, customer: custoemrId, restaurant:restaurantID, deliverer:delivererId})
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   return order
}

// This is used to get the information of a particular order using a particular orders id
export const getOrderInformation = (orderID) => {
    axios.get(BASE_URL+"/mealorders/"+orderID)
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

// get all orders from the API
export const getAllOrders = () => {
    axios.get(BASE_URL+"/mealorders/")
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

// get the order by a specific customer
export const getAllOrdersByCustomer = (customerId) => {
    axios.get(BASE_URL+"/mealorders/get_customers_orders", {customerId: customerId})
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

// get all ordres from a specific restaurant
export const getAllOrdersFromARestaurant = (restaruantId)=>{
    axios.get(BASE_URL+"/mealorders/get_restaurants_orders", {restaruantId:restaruantId})
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}
