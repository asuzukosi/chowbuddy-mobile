import axios from 'axios'
import BASE_URL from './base'


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

export const getOrderInformation = (orderID) => {
    axios.get(BASE_URL+"/mealorders/"+orderID)
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

export const getAllOrders = () => {
    axios.get(BASE_URL+"/mealorders/")
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

export const getAllOrdersByCustomer = (customerId) => {
    axios.get(BASE_URL+"/mealorders/get_customers_orders", {customerId: customerId})
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

export const getAllOrdersFromARestaurant = (restaruantId)=>{
    axios.get(BASE_URL+"/mealorders/get_restaurants_orders", {restaruantId:restaruantId})
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}
