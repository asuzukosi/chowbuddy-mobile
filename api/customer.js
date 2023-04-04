import axios from 'axios'
import BASE_URL from './base'

export const getAllCustomers  = () => {
    axios.get(BASE_URL+"/customers/")
         .then((response)=>{
            return response.data
         })
         .catch((err)=>{
            console.error(err)
         })
}

export const getSpecificCustomerDetails = (customerId) => {
    axios.get(BASE_URL+"/customers/"+customerId)
         .then((response)=>{
            return response.data
         })
         .catch((err)=>{
            console.error(err)
         })
}


export const sendCurrentLocationOfCustomer = (longitude, latitude, customerId) => {
    // this is a function to send the current location of a customer
    axios.post(BASE_URL+"/customers/"+customerId+"/update_longlat/", {longitude:longitude, latitude:latitude})
         .then((response)=>{
            return response.data
         })
         .catch((err)=>{
            console.error(err)
         })
}
