import { View, Text, Image } from 'react-native'
import React from 'react'
import { ClockIcon} from "react-native-heroicons/outline";

export default function RestaurantTopCard({navigation, name, image, price_level, ranking}) {
  return (
    <View>
            <Image source={{uri:image}} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-42"/>
            <View className="border-gray-400 border p-4">
                <Text className="text-lg font-bold">{name}</Text>
                <View className="flex-row mt-2">
                    <ClockIcon className="mt-3 ml-10 mr-4" size={20} color="gray"/>
                    <Text className="ml-3">{ranking} . {price_level}</Text>
                </View>
            </View>
        </View>
  )
}