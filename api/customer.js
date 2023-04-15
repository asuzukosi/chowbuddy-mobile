import axios from 'axios'

BASE_URL =  'http://127.0.0.1:8000'

export const getAllCustomers  = () => {
    axios.get(BASE_URL+"/customers/")
         .then((response)=>{
            return response.data
         })
         .catch((err)=>{
            console.error(err)
         })
}

export const getCustomerBasedOnUserId = async (userId) => {
   console.log("Using the newly built function")
   const customer = await axios.get(BASE_URL+"/customers/?user=" + userId)
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   console.log("The retrieved customer is ", customer)
   return customer[0]
}

export const getSpecificCustomerDetails = async (customerId) => {
    const customer = await axios.get(BASE_URL+"/customers/"+customerId + "/")
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })

   return customer
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
