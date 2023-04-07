import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import PaymentSummaryCard from '../PaymentSummaryCard'
import PaymentCard from '../PaymentCard'

export default function PaymentPage({navigation}) {
  return (
    <View className="flex-1">
      <NavigationBar/>
      <View className="mt-6 p-2">
        <PaymentSummaryCard/>
        <PaymentCard/>
        <TouchableOpacity className="items-center mt-4 w-80 align-middle ml-6 bg-indigo-600 p-5 rounded-2xl" onPress={()=>{navigation.navigate("DeliveryLocationSelection")}}>
          <Text className="text-white text-md font-extrabold">Continue </Text>
        </TouchableOpacity>
      </View>
      <ButtomNaviagationBar/>
    </View>
  )
}