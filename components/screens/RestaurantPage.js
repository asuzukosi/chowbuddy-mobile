import { View, Text, Image, ScrollView } from 'react-native'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'


import React, {useState} from 'react'
import RestaurantTopCard from '../RestaurantTopCard'
import RestaurantDishCard from '../RestaurantDishCard'
import { getAllDishesForRestaurant } from '../../api/restaurant'

export default function RestaurantPage({route, navigation}) {
  const [dishes, setDishes] = useState([])

  const getDishesForRestaurant = async () => {
    if(dishes.length == 0){
      const apiDishes = await getAllDishesForRestaurant(route.params.id)
      setDishes(apiDishes)
    }
   
  }
  
  getDishesForRestaurant()
  return (
    <View className="flex-1">
       <NavigationBar navigation={navigation}/>
       <View>
            <RestaurantTopCard navigation={navigation} name={route.params.name} image={route.params.image} price_level={route.params.price_level} ranking={route.params.ranking}/>
            <ScrollView className="p-4 h-80">
              {
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