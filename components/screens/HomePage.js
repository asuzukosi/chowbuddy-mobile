import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar';
import CategoriesGrid from '../CategoriesGrid';
import DealsCard from '../DealsCard';
import RestaurantScrollBar from '../RestaurantScrollBar';


export default function HomePage({navigation}) {
  const [category, setCategory] = useState(null)

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
