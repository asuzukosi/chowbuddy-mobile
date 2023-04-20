import axios from 'axios'
BASE_URL  = 'http://127.0.0.1:8000'

// function that calls api to login user
export const loginCustomer = async (username, password)=> {
    const userData = await axios.post(BASE_URL+"/login/customers", {username:username, password:password})
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
    return userData
}
//isoka
// function that calls api to register user
export const registerCustomer = async (username,password,first_name,last_name,email,phone_number,address)=> {
      const userData = await axios.post(BASE_URL+"/customers/",{username:username, password:password, first_name:first_name,last_name:last_name, email:email, phone_number:phone_number, address:address})
         .then((response)=>{
            return response.data;
         })
         .catch((error)=>{
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })

      return userData;
    }

export const loginDeliverer = (username, password)=> {
    axios.post(BASE_URL+"/login/deliverer/",{username:username, password:password})
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

export const registerDeliverer = (username, email, password, location)=> {
    axios.post(BASE_URL+"/deliverers/", {username:username, email:email, password:password, location:location})
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error)
         })
}


export const loginRestaurant = ()=> {
    axios.post(BASE_URL+"/login/restaurants/",{username:username, password:password})
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

export const registerRestaurant = (name, email, description, address, phone, image, long, lat, rating, ranking, price_level)=> {
    axios.post(BASE_URL+"/restaurants/",{username:username, email:email, password:password, location:location})
        .then((response)=>{
          return response.data
        })
        .then((error)=>{
            console.error(error)
        })
}
