// Import required packages and components
import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import ButtomNavigationBarMinimized from '../ButtomNavigationBarMinimized'
import NavigationBarWithOnlyCommunities from '../NavigationBarWithOnlyCommunities'
import { MagnifyingGlassIcon, HomeIcon, StarIcon, UserCircleIcon, PlusIcon} from "react-native-heroicons/outline";
import RestaurantOfferingsSlider from '../RestaurantOfferingsSlider';
import RestaurantOrderRequestCard from '../RestaurantOrderRequestCard';
import { getAllDishesForRestaurant } from '../../api/restaurant'
import { getUserDetails } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';


// this is the restaurant orders page
export default function RestaurantOrdersPage({navigation}) {

  // setup the state of the component
  const [dishes, setDishes] = useState([])
  const currentUser = useSelector(getUserDetails);


  // this is a function to get all the dishes of a particular restaurant
  const getDishesForRestaurant = async () => {
    if(dishes.length == 0){
      const apiDishes = await getAllDishesForRestaurant(1)
      setDishes(apiDishes)
      console.log('Dishes are ', apiDishes.length)
    }
   
  }
  
  // get dishes for restaurant
  getDishesForRestaurant()


  // render UI of the page
  return (
    <View className="flex-1">
      <NavigationBarWithOnlyCommunities navigation={navigation}/>
      <View className="p-3">
            <View className="flex-row">
                <Text className="flex-1 mt-2 text-lg font-bold">My Orders</Text>
                <View className="p-3 bg-indigo-600 rounded-full">
                    <PlusIcon  size={20} color="white"/>
                </View>
            </View>
        <View className=" h-80">
            <ScrollView>
              {
                // loop through the dishes and render them as dish cards
                dishes?.map(dish => {
                    return <RestaurantOrderRequestCard user={currentUser} key={dish.id} image={dish.image} name={dish.name}/>
                })
              }
            </ScrollView>
        </View>
        <RestaurantOfferingsSlider navigation={navigation} dishes={dishes}/>
        </View>
      <ButtomNavigationBarMinimized navigation={navigation}/>
    </View>
  )
}