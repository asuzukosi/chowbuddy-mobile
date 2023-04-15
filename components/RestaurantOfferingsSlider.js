import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantOfferingCard from './RestaurantOfferingCard'

export default function RestaurantOfferingsSlider({navigation, dishes}) {
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
        {
          dishes.map(dish => {
            return <RestaurantOfferingCard key={dish.id} image={dish.image} name={dish.name} price={dish.price}/>
          })
        }
        
       
      </ScrollView>
    </View>
  )
}