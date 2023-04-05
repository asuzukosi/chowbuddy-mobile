import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar';
import CategoriesGrid from '../CategoriesGrid';
import DealsCard from '../DealsCard';
import RestaurantScrollBar from '../RestaurantScrollBar';

NavigationBar

export default function HomePage({navigation}) {
  return (
    <View className="flex-1">
        <NavigationBar navigation={navigation}/>
          <CategoriesGrid/>
          <ButtomNaviagationBar/>
          <ScrollView>
            <DealsCard/>
            <Text className="text-l ml-2 mt-2 font-extrabold text-gray-600">Restuarants</Text>
            <RestaurantScrollBar/>
          </ScrollView>
          
    </View>
  )
}
