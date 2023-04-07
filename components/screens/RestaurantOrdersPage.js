import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ButtomNavigationBarMinimized from '../ButtomNavigationBarMinimized'
import NavigationBarWithOnlyCommunities from '../NavigationBarWithOnlyCommunities'
import { MagnifyingGlassIcon, HomeIcon, StarIcon, UserCircleIcon, PlusIcon} from "react-native-heroicons/outline";
import RestaurantOfferingsSlider from '../RestaurantOfferingsSlider';
import RestaurantOrderRequestCard from '../RestaurantOrderRequestCard';


export default function RestaurantOrdersPage({navigation}) {
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
                <RestaurantOrderRequestCard/>
                <RestaurantOrderRequestCard/>
                <RestaurantOrderRequestCard/>
                <RestaurantOrderRequestCard/>
                <RestaurantOrderRequestCard/>
            </ScrollView>
        </View>
        <RestaurantOfferingsSlider/>
        </View>
      <ButtomNavigationBarMinimized navigation={navigation}/>
    </View>
  )
}