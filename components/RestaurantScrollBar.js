// Import required components and packages
import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import RestaurantCard from './RestaurantCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurants, searchAllRestaurants } from '../api/restaurant';

// This is the impolementation of the restaurant scroll bar, which allows you to scroll through all restaurants
export default function RestaurantScrollBar({navigation, category, searchQuery}) {

  // set up the redux state
  const [restaurants, setRestaurants] = useState([])
  const [currentCategory, setCurrentCategory] = useState(null)
  const [currentQuery, setCurrentQuery] = useState(null)

  console.log("The search query is : ", searchQuery)

  // get all restaurants from the API
  const loadRestaurants = async () => {
    // fetch the restaurants only if the restaurant list is empty
    if(restaurants.length == 0 || currentCategory !== category){
      console.log("Th  category is ", category)
      const restuarants = await getAllRestaurants(category)
      setRestaurants(restuarants)
      setCurrentCategory(category)
    }
    
    // if a new query has been entered
    if(searchQuery !== currentQuery){
      if(searchQuery && searchQuery !== ""){
        setCurrentQuery(searchQuery)
        console.log("Would be searching for " + searchQuery)
        const restuarants = await searchAllRestaurants(searchQuery)
        setRestaurants(restuarants)
      }
    }
  }
  // load the restaurants from the API
  loadRestaurants()
  
  // return the UI component
  return (
        <ScrollView className="mb-20" contentContainerStyle={{paddingHorizontal:15, paddingTop:10}}
        showsHorizontalScrollIndicator={false}>
            { restaurants?.map( restaurant => {
                return <RestaurantCard navigation={navigation} key={restaurant.id} id={restaurant.id} 
                                                               name={restaurant.name} image={restaurant.image}
                                                               price_level={restaurant.price_level} ranking={restaurant.ranking}/>
              })
            }
        </ScrollView>
  )
}