import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import { VirtualKeyboard } from 'react-native-screen-keyboard';
import DeliveryConfirmationItem from '../DeliveryConfirmationItem';

export default function DeliveryConfirmationPage({navigation}) {
  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
        <View className="p-4 mt-3">
            <Text className="text-lg font-light">Delivery Confirmation</Text>
            <View className="border border-gray-300 w-full mt-3 mb-3"></View>
            <Text className="font-bold">Order details</Text>
            <Text className="font-extralight text-sm text-gray-400 mb-4">Delivered by henry1234</Text>
            <ScrollView className="h-48">
                <DeliveryConfirmationItem/>
                <DeliveryConfirmationItem/>
                <DeliveryConfirmationItem/>
                <DeliveryConfirmationItem/>
                <DeliveryConfirmationItem/>
            </ScrollView>
            <View className="items-center p-4 bg-gray-300">
                <Text className="font-bold">2354</Text>
            </View>
            <VirtualKeyboard onKeyDown={()=>{}} onChange={()=>{}}/>
        </View>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}