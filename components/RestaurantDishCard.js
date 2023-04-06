import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {PlusIcon, MinusIcon} from "react-native-heroicons/outline";


export default function RestaurantDishCard({navigation}) {
  return (
    <View className="flex-row p-2 bg-gray-200 rounded-lg mt-2">
      <Image source={{uri:"https://guidable.co/wp-content/uploads/2018/10/fake-plastic-food-1487542_1920.jpg"}} className="h-16 w-16 object-cover transition duration-500 group-hover:scale-105 sm:h-42 rounded-lg"/>
      <View className="ml-2">
        <Text className="text-lg font-bold">
            Not so sweet sushi
        </Text>
        <Text className="text-sm text-gray-600 font-light">
            Ninja sushi
        </Text>
        <Text className="text-md text-indigo-600">
            $10
        </Text>
      </View>
      <View className="flex-row ml-3 mt-4">
        <TouchableOpacity className="bg-indigo-500 p-2 rounded-lg h-7 ml-2">
            <PlusIcon color="white" size={15}/>
        </TouchableOpacity>
        <Text className="ml-1 mt-1 font-bold text-md"> 0 </Text>
        <TouchableOpacity className="bg-indigo-500 p-2 rounded-lg h-7 ml-1">
            <MinusIcon color="white" size={15}/>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}