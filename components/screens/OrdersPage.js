import { View, Text } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import OrderTotalBox from '../OrderTotalBox'
import OrderReceiptBox from '../OrderReceiptBox'


export default function OrdersPage({navigation}) {
  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
        <View className="p-3">
          <Text className="font-extrabold text-xl">Order Basket</Text>
        </View>
        <OrderReceiptBox/>
        <OrderTotalBox/>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}