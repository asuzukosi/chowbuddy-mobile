// Import the required components and packages
import { View, Text, Image } from 'react-native'
import React from 'react'


// This is used to get the restaurant offererings card, i.e the dishes being offered by a restaurant
export default function RestaurantOfferingCard({name, price, image}) {
  return (
    <View className="mt-2 mr-2">
        <Image className="w-32 h-24 rounded-t-lg" source={{uri: "http://127.0.0.1:8000" + image }}/>
        <View className="p-3 bg-gray-200 rounded-b-lg">
            <Text className="font-extrabold">
                {name}
            </Text>
            <Text className="font-extralight text-indigo-500 text-sm">
                ${price.toFixed(2)}
            </Text>
        </View>
    </View>
  )
}