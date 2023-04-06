import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import { SearchBar } from 'react-native-elements';
import CommunitiesScrollBar from '../CommunitiesScrollBar';
import RestaurantScrollBar from '../RestaurantScrollBar';
import ButtomNaviagationBar from '../ButtomNaviagationBar';


export default function SearchPage({navigation}) {
  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
      <View>
        {/* Intro Text */}
        <Text className="text-2xl ml-2 font-extrabold text-gray-600">Explore</Text>
        {/* Search bar */}
        <SearchBar
          placeholder="Dish, restaurant or community"
          onChangeText={()=>{}}
          lightTheme={true}
          value={null}
      />
      <Text className="text-l ml-2 mt-2 font-extrabold text-gray-600">Communities</Text>
      <CommunitiesScrollBar/>
      <ScrollView>
        <Text className="text-l ml-2 mt-2 font-extrabold text-gray-600">Restaurants</Text>
        <RestaurantScrollBar/>
      </ScrollView>
      </View>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}
