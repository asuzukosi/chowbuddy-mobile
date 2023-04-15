import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RestaurantOrderRequestCard({name, image, user}) {
  return (
    <View className="flex-row p-2 bg-gray-200 rounded-lg mt-2">
    <Image source={{uri:"http://127.0.0.1:8000" + image}} className="h-16 w-16 object-cover transition duration-500 group-hover:scale-105 sm:h-42 rounded-lg"/>
    <View className="ml-2 w-32">
      <Text className="text-lg font-bold">
          {name}
      </Text>
      <Text className="text-sm text-gray-600 font-light">
         x 3
      </Text>
    </View>
    <View className="flex-row ml-10 flex-end items-center">
      <Image source={{uri:"http://127.0.0.1:8000" + user.user.profile_picture}} className=" h-12 w-12 object-cover ml-6 transition duration-500 group-hover:scale-105 sm:h-42 rounded-lg"/>
    </View>
  </View>
  )
}