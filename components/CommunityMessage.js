import { View, ScrollView, Text, Image } from 'react-native'
import React from 'react'


export default function CommunityMessage({navigation}) {
  return (
    <ScrollView>
       <View className="m-3 p-3 rounded-lg border border-gray-300 bg-blue-300 shadow-sm flex-end flex-row">
        <Text className="text-white font-bold text-right m-2 flex-1">Hello World</Text>
        <Image source={{uri: "https://links.papareact.com/wru"}}
                    className="h-8 w-8 bg-gray-300 p-4 rounded-lg" />
      </View>
      <View className="m-3 p-3 rounded-lg border border-gray-300 bg-gray-400 shadow-sm flex-row">
        <Image source={{uri: "https://links.papareact.com/wru"}}
                    className="h-8 w-8 bg-gray-300 p-4 rounded-lg" />
        <Text className="text-white font-bold m-2">Welcome friend</Text>
      </View>
    </ScrollView>
    
  )
}