import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline";

export default function DeliveryConfirmationItem({navigation}) {
  return (
    <View className="flex-row space-x-6 w-full mb-5">
     <View className="flex-auto mr-10">
        <Text className="font-extrabold text-lg">Sweet Sushi</Text>
        <Text className="font-thin text-sm text-gray-600">Ninja sushi</Text>
        <Text className="font-thin text-sm text-gray-600">23:40</Text>
     </View>
     <View className="flex-auto ml-5 mt-2">
        <ArrowRightIcon size={20} color="gray" />
     </View>
     <View className="flex-auto pl-16">
        <Text className="font-extrabold">2</Text>
        <Text className="font-thin text-sm text-gray-600">$4.00</Text>
     </View>
    </View>
  )
}