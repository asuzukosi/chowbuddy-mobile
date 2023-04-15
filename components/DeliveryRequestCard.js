import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { PhoneIcon, MapPinIcon } from "react-native-heroicons/outline";


export default function DeliveryRequestCard({navigation, customer, restaurant, order, deliverer}) {
  return (
    <View className="z-10 absolute bottom-0 w-full bg-white p-4 pb-12 rounded-t-3xl">
      <Text className="px-3 font-extrabold text-lg">Delivery Request</Text>
            <View className="pt-2 pl-2 flex-row mt-3 space-x-3">
                <Image  source={{uri:restaurant.image}} className=" h-12 w-12 object-cover transition duration-500 group-hover:scale-105 sm:h-42 rounded-full"/>
                
                <View className="mt-1  mr-20">
                    <Text className="font-bold ">{restaurant.name}</Text>
                    <Text className="font-light text-gray-500 text-sm">Restaurant Address</Text>
                    <Text>{restaurant.address}</Text>
                </View>

                <TouchableOpacity className="mt-2 ml-6">
                    <PhoneIcon color={"gray"} size={20}/>
                </TouchableOpacity>
            </View>
      <View className="border border-gray-300 w-full mt-3 mb-2"></View>

      <View className="pt-2 pl-2 flex-row mt-3 space-x-3">
                <Image  source={{uri:customer.user.profile_picture}} className=" h-12 w-12 object-cover transition duration-500 group-hover:scale-105 sm:h-42 rounded-full"/>
                
                <View className="mt-1  mr-20">
                    <Text className="font-bold ">{customer.user.username}</Text>
                    <Text className="font-light text-gray-500">Customer address</Text>
                    <Text>{customer.address}</Text>
                </View>

                <TouchableOpacity className="mt-2 ml-6">
                    <PhoneIcon color={"gray"} size={20}/>
                </TouchableOpacity>
            </View>
      <View className="border border-gray-300 w-full mt-3 mb-2"></View>

      <View className="flex-row space-x-3 p-3">
        <View>
            <Text className="font-bold">
                Distance
            </Text>
            <Text className="font-light text-gray-400">
                0.8mil
            </Text>
        </View>
        <View>
            <Text className="font-bold">
                Charge
            </Text>
            <Text className="font-light text-gray-400">
                $5
            </Text>
        </View>
      </View>

        <View className="flex-row space-x-2">

            <TouchableOpacity onPress={()=>{navigation.navigate("DeliveryTracking", {customer:customer, restaurant:restaurant, deliverer:deliverer, order:order})}} className="rounded-lg w-36 mt-3 mr-3 bg-indigo-500 p-4 items-center">
                <Text className="font-bold text-white align-middle">Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("DeliveryTracking", {customer:customer, deliverer:deliverer, order:order, restaurant:restaurant})}} className="rounded-lg w-36 mt-3 mr-3 bg-white border border-indigo-500 p-4 items-center">
                <Text className="font-bold text-indigo-500 align-middle">Reject</Text>
            </TouchableOpacity>
        </View>

            
    </View>
  )
}