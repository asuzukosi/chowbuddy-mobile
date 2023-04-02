import axios from 'axios'
import BASE_URL from './base'


const getAllMealPlans = () => {
    axios.get(BASE_URL+"/mealplans/")
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            return console.error(error)
         })
}

const getAllMealPlansForACustomer = (custoemrId) => {
    axios.get(BASE_URL+"/customers/"+custoemrId+"/get_all_my_meal_plans/")
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.error(error)
         })
}

const getMealPlanInfor = (mealPlanId) => {
    axios.get(BASE_URL+"/mealplans/"+mealPlanId)
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            return console.error(error)
         })
}

const getNextIntervalForMealPlan = (mealPlanId) => {
    axios.get(BASE_URL+"/mealplans/"+mealPlanId)
         .then((response)=>{
            return response.data.next_interval
         })
         .catch((error)=>{
            return console.error(error)
         })
}