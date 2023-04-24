import axios from 'axios'
import BASE_URL from './base'

// This is a function to get the deliverers current location
export const getDelivererCurrentLocation = (delivererId) => {
    // get the current location of a driver
    axios.get(BASE_URL+"/deliverers/"+delivererId)
         .then((response)=>{
            data = {
                longitude: response.data.longitude,
                latitude: response.data.latitude
            }
            return response.data
         })
         .catch((error) => {
            console.error(error)
         })
}

// This is a function to set the deliverers current location
export const sendDeliverersCurrentLocation = (longitude, latitude, delivererId) => {
    // send the current location of the deliverer
    axios.post(BASE_URL + '/deliverers/' + delivererId + "/updata_longlat/", {longitude: longitude, latitude: latitude})
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            console.error(error)
         })
}

// This is a function to confirm a particular delivery given the delivery id
export const confirmDelivery = (deliveryId) => {
    axios.get(BASE_URL + '/deliveries/' + deliveryId + '/complete')
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            console.error(error)
         })
}

// This is a function to get delivery information given the delivery id
export const getDelivererInformation = async (deliveryId) => {
      const deliverer = axios.get(BASE_URL + '/deliverers/' + deliveryId )
            .then((response) => {
               return response.data})
            .catch((error) => {
               console.error(error);
               console.log(error.response.data);
               console.log(error.response.status);
               return null;
            })
      return deliverer
}

// This is a function to get all deliveres close to a particular location
export const getAllDeliverersCloseToLoction = (longitude, latitude)=>{
      axios.post(BASE_URL + '/deliverers/get_closest_deliverers', {longitude:longitude, latitude:latitude})
           .then((response) => {
            return response.data
           })
           .catch((error) => {
            console.error(error)
           })
            
}

// This is a function to get all the deliveries from the API
export const getAllDeliveries = () => {
      axios.get(BASE_URL + '/deliveries/')
           .then((response) => {
               return response.data
           })
           .catch((error) =>{
               console.error(error)
           })
}

// This is a function to get all the deliverers from the API
export const getAllDeliverers = () => {
      axios.get(BASE_URL + '/deliverys/')
           .then((response) => {
               return response.data
           })
           .catch((error) =>{
               console.error(error)
           })
}