import axios from 'axios'
import BASE_URL from './base'


const loginCustomer = (username, password)=> {
    axios.post(BASE_URL+"/login/customers/", data={username:username, password:password})
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.log(error)
         })
}

const registerCustomer = (username,password,first_name,last_name,email,phone_number,address)=> {
    axios.post(BASE_URL+"/customers/", data={username:username, password:password, first_name:first_name,last_name:last_name, email:email, phone_number:phone_number, address:address})
         .then((response)=>{})
         .catch((error)=>{
            console.error(error)
         })
    }

const loginDeliverer = (username, password)=> {
    axios.post(BASE_URL+"/login/deliverer/", data={username:username, password:password})
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

const registerDeliverer = (username, email, password, location)=> {
    axios.post(BASE_URL+"/deliverers/", data={username:username, email:email, password:password, location:location})
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error)
         })
}


const loginRestaurant = ()=> {
    axios.post(BASE_URL+"/login/restaurants/", data={username:username, password:password})
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

const registerRestaurant = (name, email, description, address, phone, image, long, lat, rating, ranking, price_level)=> {
    axios.post(BASE_URL+"/restaurants/", data={username:username, email:email, password:password, location:location})
        .then((response)=>{
          return response.data
        })
        .then((error)=>{
            console.error(error)
        })
}
