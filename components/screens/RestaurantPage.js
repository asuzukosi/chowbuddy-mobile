import { View, Text, Image, ScrollView } from 'react-native'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'


import React from 'react'
import RestaurantTopCard from '../RestaurantTopCard'
import RestaurantDishCard from '../RestaurantDishCard'

export default function RestaurantPage({navigation}) {
  return (
    <View className="flex-1">
       <NavigationBar navigation={navigation}/>
       <View>
            <RestaurantTopCard/>
            <ScrollView className="p-4 h-80">
                <RestaurantDishCard/>
                <RestaurantDishCard/>
                <RestaurantDishCard/>
                <RestaurantDishCard/>
                <RestaurantDishCard/>
                <RestaurantDishCard/>
                <RestaurantDishCard/>
                <RestaurantDishCard/>
                <RestaurantDishCard/>
            </ScrollView>
       </View>
       <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}