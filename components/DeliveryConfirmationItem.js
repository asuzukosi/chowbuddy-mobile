import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline";

// This is the component used to show a particular item on the delivery confirmation page
export default function DeliveryConfirmationItem({navigation, dish, restaurant, quantity, price}) {
  return (
    <View className="flex-row space-x-6 w-full mb-5">
     <View className="flex-auto mr-10">
        <Text className="font-extrabold text-lg w-32">{dish.name}</Text>
        <Text className="font-thin text-sm text-gray-600">{restaurant.name}</Text>
        <Text className="font-thin text-sm text-gray-600">23:40</Text>
     </View>
     <View className="flex-auto ml-5 mt-2">
        <ArrowRightIcon size={20} color="gray" />
     </View>
     <View className="flex-auto pl-16">
        <Text className="font-extrabold">{quantity}</Text>
        <Text className="font-thin text-sm text-gray-600">${parseFloat(price) * parseFloat(quantity)}</Text>
     </View>
    </View>
  )
}