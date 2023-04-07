import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { PhoneIcon, MapPinIcon } from "react-native-heroicons/outline";

export default function DeliveryTrackingCard({navigation}) {
  return (
    <View className="z-10 absolute bottom-0 w-full bg-white p-4 pb-12 rounded-t-3xl">
      <Text className="px-3 font-extrabold text-lg">Order Tracking</Text>
            <View className="pt-2 pl-2 flex-row space-x-3">
                <Image  source={{uri:"https://guidable.co/wp-content/uploads/2018/10/fake-plastic-food-1487542_1920.jpg"}} className=" h-12 w-12 object-cover transition duration-500 group-hover:scale-105 sm:h-42 rounded-full"/>
                
                <View className="mt-1  mr-20">
                    <Text className="font-bold ">Cameron Williamson</Text>
                    <Text className="font-light text-gray-500 text-sm">Delivery Man</Text>
                </View>

                <TouchableOpacity className="mt-2 ml-6">
                    <PhoneIcon color={"gray"} size={20}/>
                </TouchableOpacity>
            </View>
      <View className="border border-gray-300 w-full mt-5 mb-3"></View>

      <View className="flex-row p-2">
        <View className="p-3 bg-indigo-300 rounded-full">
            <MapPinIcon color="white" size={20}/>
        </View>
        <View className="ml-3">
            <Text className="font-light text-gray-500 text-sm">Delivery Address</Text>
            <Text className="font-bold">2972 Westheimer Rd. Santa Ana</Text>
        </View>
      </View>

      <View className="flex-row p-2">
        <View className="p-3 bg-indigo-300 rounded-full">
            <MapPinIcon color="white" size={20}/>
        </View>
        <View className="ml-3">
            <Text className="font-light text-gray-500 text-sm">Delivery Time</Text>
            <Text className="font-bold">3:00PM (Max 20 min.)</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("DeliveryConfirmation")}} className="rounded-lg mt-3 mr-3 w-full bg-indigo-500 p-4 items-center">
        <Text className="font-bold text-white align-middle">Confirm Delivery</Text>
      </TouchableOpacity>
    </View>
  )
}