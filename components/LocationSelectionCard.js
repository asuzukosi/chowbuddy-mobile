// Import required packages and components
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Haptics from 'expo-haptics';


// This is the location selection card used by the customer when selecting their prefered delivery location
export default function LocationSelectionCard({navigation, customer, deliverer, restaurant, order}) {
  console.log('customer in location selection card is :', customer)
  // return the component
  return (
    <View className="z-10 absolute bottom-0 w-full bg-white p-4 pb-12 rounded-t-3xl">
      <Text className="px-3 font-extrabold text-lg">Select Location</Text>
      <Text className="font-light text-gray-300 px-3 mt-2">Your Location</Text>
      <Text className="px-3">
        {customer.address}
      </Text>
      <Text className="font-light text-gray-300 px-3 mt-3 ">Delivery To</Text>
      <View className="flex-row space-x-4 px-3 mt-2">
        {/* Select the currnt location and receive haptic feedback */}
        <TouchableOpacity onPress={()=>{Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); navigation.navigate("DeliveryRequest", {customer:customer, restaurant:restaurant, deliverer:deliverer, order:order})}} className="p-4 rounded-lg bg-indigo-500 w-24">
            <Text className="font-bold text-white">Current</Text>
        </TouchableOpacity>
        {/* Select the home location and receive haptic feedback */}
        <TouchableOpacity onPress={()=>{Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); navigation.navigate("DeliveryRequest", {customer:customer, restaurant:restaurant, deliverer:deliverer, order:order})}}className="p-4 rounded-lg bg-indigo-500 w-24">
            <Text className="font-bold text-white">Home</Text>
        </TouchableOpacity>
        {/* Select the office location and receive haptic feedback */}
        <TouchableOpacity onPress={()=>{Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); navigation.navigate("DeliveryRequest", {customer:customer, restaurant:restaurant, deliverer:deliverer, order:order})}} className="p-4 rounded-lg bg-indigo-500 w-24">
            <Text className="font-bold text-white">Office</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}