import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function OrderReceiptBoxDishCard({navigation, id, count, name, price, restaurant, image}) {
  console.log(image)
  return (
    <View className="flex-row p-2 bg-gray-200 rounded-lg mt-2">
      <Image source={{uri:"http://127.0.0.1:8000" + image}} className="h-16 w-16 object-cover transition duration-500 group-hover:scale-105 sm:h-42 rounded-lg"/>
      <View className="ml-2 w-40">
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
        <Text className="ml-1 mt-1 font-bold text-md flex-auto align-middle">{count}</Text>
      </View>
    </View>
  )
}