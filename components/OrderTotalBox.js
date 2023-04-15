import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasketTotalPrice, getGroupedItems } from '../features/basketSlice';
import { getSpecificRestaurant } from '../api/restaurant';

export default function OrderTotalBox({navigation}) {
  const totalPrice =  useSelector(calculateBasketTotalPrice)
  const groupedItems = useSelector(getGroupedItems)
  const instanceItem = groupedItems[0]
  const [restaurant, setRestaurant] = useState(null)

  const getRestaurantInformation = async() =>{
    if(restaurant == null){
      const restaurant = await getSpecificRestaurant(instanceItem.restaurant.id)
      setRestaurant(restaurant)
    }
   
  }

  getRestaurantInformation()


  return (
    <View className="bg-indigo-600 rounded-lg p-4 bottom-24 absolute w-11/12 ml-4">
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
      <Text className="text-white text-md font-extrabold flex-end">${parseFloat(totalPrice) + 5.00}</Text>
    </View>
    <TouchableOpacity className="items-center bg-white p-3 rounded-2xl" onPress={()=>{navigation.navigate("Payment", {restaurant:restaurant})}}>
      <Text className="text-indigo-600 text-md font-extrabold">Place my Order </Text>
    </TouchableOpacity>
</View>
  )
}