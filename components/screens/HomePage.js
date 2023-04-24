// import required packages and components
import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar';
import CategoriesGrid from '../CategoriesGrid';
import DealsCard from '../DealsCard';
import RestaurantScrollBar from '../RestaurantScrollBar';

// this is the implementation of the homepage component
export default function HomePage({navigation}) {
  // set up the state of the component which is used to store the selected category information
  const [category, setCategory] = useState(null)


  // render the UI component
  return (
    <View className="flex-1">
        <NavigationBar navigation={navigation}/>
          <CategoriesGrid navigation={navigation} setSearchCategory={setCategory}/>
          <ScrollView>
            <DealsCard navigation={navigation}/>
            <Text className="text-l ml-2 mt-2 font-extrabold text-gray-600">Restaurants</Text>
            <RestaurantScrollBar navigation={navigation} category={category}/>
          </ScrollView>
          <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}
