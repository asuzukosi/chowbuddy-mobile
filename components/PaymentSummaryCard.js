import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasketTotalPrice } from '../features/basketSlice';

export default function PaymentSummaryCard({navigation}) {

  const totalPrice =  useSelector(calculateBasketTotalPrice)

  return (
    <View className="bg-indigo-600 rounded-lg p-4 w-11/12 ml-4">
    <View className="flex-row p-3">
      <Text className="text-white text-md font-extrabold flex-1">Sub Total</Text>
      <Text className="text-white text-md font-extrabold flex-end">${totalPrice}</Text>
    </View><View className="flex-row p-3">
      <Text className="text-white text-md font-extrabold flex-1">Delivery Charge</Text>
      <Text className="text-white text-md font-extrabold flex-end">$5</Text>
    </View><View className="flex-row p-3">
      <Text className="text-white text-md font-extrabold flex-1">Discount</Text>
      <Text className="text-white text-md font-extrabold flex-end">$0</Text>
    </View>
    <View className="border align-middle ml-2 mr-2 border-white w-8/9 mb-3"></View>
    <View className="flex-row p-3">
      <Text className="text-white text-md font-extrabold flex-1">Total</Text>
      <Text className="text-white text-md font-extrabold flex-end">${parseFloat(totalPrice) + 5}</Text>
    </View>
</View>
  )
}