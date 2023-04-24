import axios from 'axios'
import BASE_URL from './base'

// This is a function to get all the available meal plans from the API
export const getAllMealPlans = () => {
    axios.get(BASE_URL+"/mealplans/")
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            return console.error(error)
         })
}

// This is a function to get all the meal plans for a particular customer
export const getAllMealPlansForACustomer = (custoemrId) => {
    axios.get(BASE_URL+"/customers/"+custoemrId+"/get_all_my_meal_plans/")
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

// This is a function to get the information for a particular meal plan
export const getMealPlanInfor = (mealPlanId) => {
    axios.get(BASE_URL+"/mealplans/"+mealPlanId)
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            return console.error(error)
         })
}

// This is a fucntion to get the next time interval for a particular meal plan
export const getNextIntervalForMealPlan = (mealPlanId) => {
    axios.get(BASE_URL+"/mealplans/"+mealPlanId)
         .then((response)=>{
            return response.data.next_interval
         })
         .catch((error)=>{
            return console.error(error)
         })
}