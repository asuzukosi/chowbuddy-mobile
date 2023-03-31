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

const confirmDelivery = () => {
    
}

const getDelivererInformation = () => {

}

const getAllDeliverersCloseToLoction = (location)=>{

}

const getAllDeliveries = () => {

}

const getAllDeliverers = () => {

}