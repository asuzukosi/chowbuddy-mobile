import axios from 'axios'
import BASE_URL from './base'


const getAllRestaurants = () => {
    axios.get(BASE_URL+"/restaurants/")
         .then((resposne)=>{
            resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}


const searchAllRestaurants = (query) => {
    axios.get(BASE_URL+"/restaurants/?search="+query)
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}


const getAllDishesForRestaurant = (restaurantID) => {
    axios.get(BASE_URL+"/restaurants/"+restaurantID+"/dishes")
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

const makeOrder = (dishorders, restaurantID, custoemrId, delivererId) =>{
    axios.post(BASE_URL+"/mealorders/create_order/", {dishorders: dishorders, customer: custoemrId, restaurant:restaurantID, deliverer:delivererId})
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

const getOrderInformation = (orderID) => {
    axios.get(BASE_URL+"/mealorders/"+orderID)
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

const getAllOrders = () => {
    axios.get(BASE_URL+"/mealorders/")
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

const getAllOrdersByCustomer = (customerId) => {
    axios.get(BASE_URL+"/mealorders/get_customers_orders", {customerId: customerId})
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

const getAllOrdersFromARestaurant = (restaruantId)=>{
    axios.get(BASE_URL+"/mealorders/get_restaurants_orders", {restaruantId:restaruantId})
         .then((resposne)=>{
            return resposne.data
         })
         .catch((error)=>{
            console.error(error)
         })
}
