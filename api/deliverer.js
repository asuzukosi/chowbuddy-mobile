import axios from 'axios'
import BASE_URL from './base'

const getDelivererCurrentLocation = (delivererId) => {
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

const sendDeliverersCurrentLocation = (longitude, latitude, delivererId) => {
    // send the current location of the deliverer
    axios.post(BASE_URL + '/deliverers/' + delivererId + "/updata_longlat/", {longitude: longitude, latitude: latitude})
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            console.error(error)
         })
}

const confirmDelivery = (deliveryId) => {
    axios.get(BASE_URL + '/deliveries/' + deliveryId + '/complete')
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            console.error(error)
         })
}

const getDelivererInformation = (deliveryId) => {
      axios.get(BASE_URL + '/deliveries/' + deliveryId )
            .then((response) => {
               return response.data})
            .catch((error) => {
               console.error(error)
            })
}

const getAllDeliverersCloseToLoction = (longitude, latitude)=>{
      axios.post(BASE_URL + '/deliverers/get_closest_deliverers', {longitude:longitude, latitude:latitude})
           .then((response) => {
            return response.data
           })
           .catch((error) => {
            console.error(error)
           })
            
}

const getAllDeliveries = () => {
      axios.get(BASE_URL + '/deliveries/')
           .then((response) => {
               return response.data
           })
           .catch((error) =>{
               console.error(error)
           })
}

const getAllDeliverers = () => {
      axios.get(BASE_URL + '/deliverys/')
           .then((response) => {
               return response.data
           })
           .catch((error) =>{
               console.error(error)
           })
}