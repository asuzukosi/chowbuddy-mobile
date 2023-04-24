import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CreditCardIcon } from "react-native-heroicons/outline";

// This is the payment card component of the payment page
export default function PaymentCard({restaurantName}) {
  return (
    <View className="mt-3 border ml-3 mr-3 border-indigo-600 p-5 border-dashed rounded-lg">
      <View className="flex-row mt-2 mb-2">
        <Text className="font-light flex-1 text-gray-600">
          {restaurantName}
        </Text>
        <Text className="font-light flex-end text-gray-600">
          Order No: 0384893
        </Text>
      </View>
      <Text className="text-xl font-bold mb-2">
        10.00 $
      </Text>
      <Text className="ml-2 text-sm text-gray-500">
        Pay by bank card
      </Text>
      <View className="bg-gray-200 rounded-lg flex-row p-4 mt-2">
        <CreditCardIcon size={20} color="gray" />
        <TextInput className=" ml-3" placeholder='Card Number' />
      </View>
      <View className="w-full border border-gray-300 mt-3 mb-3"></View>
      <Text className="text-sm font-light text-gray-500">Other payment methods</Text>
      <View className="mt-3 flex-row space-x-8">
        <TouchableOpacity className="bg-gray-300 p-2 items-center w-20 rounded-lg">
            <Image source={require("../assets/images/icons/apple-pay-2.png")}/>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-300 p-2 items-center w-20 rounded-lg">
            <Image source={require("../assets/images/icons/paypal.png")}/>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-300 p-2 items-center w-20 rounded-lg">
            <Image source={require("../assets/images/icons/bitcoin.png")}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}