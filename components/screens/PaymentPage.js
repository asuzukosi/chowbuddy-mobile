// import required packages and components
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import PaymentSummaryCard from '../PaymentSummaryCard'
import PaymentCard from '../PaymentCard'
import { getDelivererInformation } from '../../api/deliverer'
import { useDispatch, useSelector } from 'react-redux';
import { getGroupedItems } from '../../features/basketSlice'
import { getUserDetails } from '../../features/userSlice'
import { getCustomerBasedOnUserId, getSpecificCustomerDetails } from '../../api/customer'
import { makeOrder } from '../../api/restaurant'
import * as Haptics from 'expo-haptics';



// This is the implementation of the payment page
export default function PaymentPage({navigation, route}) {
  // get the grouped items and current user from the redux store
  const groupedItems = useSelector(getGroupedItems)
  const currentUser = useSelector(getUserDetails);

  // this function creates and oredr on the API
  const createOrderOnAPI = async () => {
    // first get deliverer details
    const deliverer = await getDelivererInformation(1)
    const customer = await getCustomerBasedOnUserId(currentUser.user.id)

    console.log("The customer is :", customer)
    console.log("The deliverer is :", deliverer)
    let dishOrders = []
    groupedItems.forEach(groupedItem => {
      let item = {
        dish: groupedItem.id,
        quantity: groupedItem.count,
        amount: groupedItem.price,
      }
      dishOrders.push(item)
    })
    const order = await makeOrder(dishOrders, route.params.restaurant.id, customer.id, deliverer.id)
    // sends haptic feedback when order creation is successful
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    // navigate to location selection page after order creation is successful
    navigation.navigate("DeliveryLocationSelection", {restaurant:route.params.restaurant, customer:customer, deliverer:deliverer, order:order})
  }


  // render UI of the page
  return (
    <View className="flex-1">
      <NavigationBar/>
      <View className="mt-6 p-2">
        <PaymentSummaryCard/>
        <PaymentCard restaurantName={route.params.restaurant.name}/>
        <TouchableOpacity className="items-center mt-4 w-80 align-middle ml-6 bg-indigo-600 p-5 rounded-2xl" onPress={()=>{createOrderOnAPI()}}>
          <Text className="text-white text-md font-extrabold">Continue </Text>
        </TouchableOpacity>
      </View>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}