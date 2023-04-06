import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OrderReceiptBoxDishCard from './OrderReceiptBoxDishCard'

export default function OrderReceiptBox() {
  return (
    <View className="h-80 p-4 rounded-lg">
      <ScrollView>
      <OrderReceiptBoxDishCard/>
      <OrderReceiptBoxDishCard/>
      <OrderReceiptBoxDishCard/>
      <OrderReceiptBoxDishCard/>
      <OrderReceiptBoxDishCard/>
      <OrderReceiptBoxDishCard/>
      <OrderReceiptBoxDishCard/>
    </ScrollView>
    </View>
    
  )
}