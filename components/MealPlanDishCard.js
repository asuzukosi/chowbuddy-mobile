import { View, Text, Image } from 'react-native'
import React from 'react'

export default function MealPlanDishCard({id, name, restaurant, count, price, image}) {
  return (
    <View className="flex-row p-2 bg-gray-200 rounded-lg mt-2">
    <Image source={{uri: "http://127.0.0.1:8000" + image }} className="h-16 w-16 object-cover transition duration-500 group-hover:scale-105 sm:h-42 rounded-lg"/>
    <View className="ml-2">
      <Text className="text-lg font-bold">
          {name}
      </Text>
      <Text className="text-sm text-gray-600 font-light">
          {restaurant.name}
      </Text>
      <Text className="text-md text-indigo-600">
          ${price}
      </Text>
    </View>
    <View className="flex-row ml-8 mt-4">
      <Text className="ml-1 mt-1 font-bold text-lg text-indigo-600"> ${parseFloat(price) * parseFloat(count)}</Text>
    </View>
  </View>
  )
}