import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ClockIcon, ShoppingBagIcon} from "react-native-heroicons/outline";


export default function RestaurantCard() {
  return (
    <TouchableOpacity className="group relative block overflow-hidden rounded-xl mb-4">
      <View className="absolute right-0 top-0 z-10 rounded-xl bg-indigo-500 p-1.5 text-white transition hover:text-gray-900/75">
        <Text className="text-white">Featured</Text>
      </View>
      <View className="w-full">
        <Image source={{uri: "https://guidable.co/wp-content/uploads/2018/10/fake-plastic-food-1487542_1920.jpg" }} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-42"/>
      </View>
      <View className="relative border border-gray-100 bg-white p-2">
        {/* <Text className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">New</Text> */}
        <View className="flex-row">
            <Text className="font-medium text-gray-900 flex-1">Robot Toy</Text>
            <ShoppingBagIcon className="mt-3 ml-10" size={20} color="gray"/>
        </View>
        
        <View className="flex-row mb-1">
        <ClockIcon className="mt-3 ml-10" size={20} color="gray"/>
        <Text className=" text-sm ml-1 mr-1 text-gray-500">30-40 min  .  $32 min sum </Text>
        {/* <Text className="mt-1.5 text-sm text-gray-500">$14.99</Text> */}
        </View>
       

        {/* <TouchableOpacity>
            <Text className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">Add to Cart</Text>
        </TouchableOpacity> */}
      </View>
      
    </TouchableOpacity>
  )
}
