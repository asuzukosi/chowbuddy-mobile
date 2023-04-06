import { View, Text, Image } from 'react-native'
import React from 'react'
import { ClockIcon, ShoppingBagIcon} from "react-native-heroicons/outline";

export default function RestaurantTopCard() {
  return (
    <View>
            <Image source={{uri:"https://guidable.co/wp-content/uploads/2018/10/fake-plastic-food-1487542_1920.jpg"}} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-42"/>
            <View className="border-gray-400 border p-4">
                <Text className="text-lg font-bold">Ninja Sushi</Text>
                <View className="flex-row mt-2">
                    <ClockIcon className="mt-3 ml-10 mr-4" size={20} color="gray"/>
                    <Text className="ml-3">20-40 min</Text>
                </View>
            </View>
        </View>
  )
}