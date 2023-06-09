import { View, Text } from 'react-native'
import React from 'react'


// This is the minimized version of the top bar naviagation which only contains the logo,
// and it is used in the log in and signup pages
export default function NaviagationBarMinimized() {
  return (
    <View className="bg-white pt-5">
    <View className="flex-row pb-3 items-center mx-4 flexspace-x-2 mt-10">
      {/* Logo Component Start */}
      <View className="bg-indigo-600 w-20 pl-2 mr-20">
        <Text className="text-white text-xl font-bold">
          Chow Buddy
        </Text>
      </View>
    </View>
  </View>
  )
}