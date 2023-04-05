import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

export default function RestaurantScrollBar({navigation}) {
  return (
        <ScrollView className="mb-20" contentContainerStyle={{paddingHorizontal:15, paddingTop:10}}
        showsHorizontalScrollIndicator={false}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </ScrollView>
  )
}