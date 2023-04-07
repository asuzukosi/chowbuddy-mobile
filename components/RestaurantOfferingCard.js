import { View, Text, Image } from 'react-native'
import React from 'react'

export default function RestaurantOfferingCard() {
  return (
    <View className="mt-2 mr-2">
        <Image className="w-32 h-24 rounded-t-lg" source={{uri: "https://guidable.co/wp-content/uploads/2018/10/fake-plastic-food-1487542_1920.jpg"}}/>
        <View className="p-3 bg-gray-200 rounded-b-lg">
            <Text className="font-extrabold">
                Sushi
            </Text>
            <Text className="font-extralight text-indigo-500 text-sm">
                $23.00
            </Text>
        </View>
    </View>
  )
}