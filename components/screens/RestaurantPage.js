// Import the required components and packages
import { View, Text, Image, ScrollView } from 'react-native'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import React, {useState} from 'react'
import RestaurantTopCard from '../RestaurantTopCard'
import RestaurantDishCard from '../RestaurantDishCard'
import { getAllDishesForRestaurant } from '../../api/restaurant'

// this is the restaurant page implementation
export default function RestaurantPage({route, navigation}) {
  const [dishes, setDishes] = useState([])

  // this is a function that gets all the dishes for a particular restaurant from the API
  const getDishesForRestaurant = async () => {
    if(dishes.length == 0){
      const apiDishes = await getAllDishesForRestaurant(route.params.id)
      setDishes(apiDishes)
    }
   
  }
  // get all the dishes for a particular restaurant
  getDishesForRestaurant()

  // render the UI component
  return (
    <View className="flex-1">
       <NavigationBar navigation={navigation}/>
       <View>
            <RestaurantTopCard navigation={navigation} name={route.params.name} image={route.params.image} price_level={route.params.price_level} ranking={route.params.ranking}/>
            <ScrollView className="p-4 h-80">
              {
                // loop through all the dishes and render them
                dishes?.map((dish) =>{
                  return <RestaurantDishCard name={dish.name} restaurantName={route.params.name} restaurantId={route.params.id} price={dish.price.toFixed(2)} id={dish.id} key={dish.id} image={dish.image}/>
                })
              }
            </ScrollView>
            
       </View>
       <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}