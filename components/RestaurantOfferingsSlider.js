import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantOfferingCard from './RestaurantOfferingCard'

export default function RestaurantOfferingsSlider({navigation}) {
  return (
    <View className="mt-4">
     <View className="flex-row mb-2">
        <Text className="font-bold flex-1">
            My offerings :)
        </Text>
        <Text className="text-sm text-indigo-600 flex-end font-light">
            See all
        </Text>
     </View>
     
      <ScrollView horizontal>
        <RestaurantOfferingCard/>
        <RestaurantOfferingCard/>
        <RestaurantOfferingCard/>
        <RestaurantOfferingCard/>
        <RestaurantOfferingCard/>
      </ScrollView>
    </View>
  )
}