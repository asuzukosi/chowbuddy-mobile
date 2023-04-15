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



export default function RestaurantOrdersPage({navigation}) {

  const [dishes, setDishes] = useState([])
  const currentUser = useSelector(getUserDetails);

  const getDishesForRestaurant = async () => {
    if(dishes.length == 0){
      const apiDishes = await getAllDishesForRestaurant(1)
      setDishes(apiDishes)
      console.log('Dishes are ', apiDishes.length)
    }
   
  }
  
  getDishesForRestaurant()

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