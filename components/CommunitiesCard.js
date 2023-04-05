import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CommunitiesCard({navigation}) {
  return (
    <View>
       <TouchableOpacity className="relative mr-2" onPress={()=>{}}>
        <View>
            <View className="w-20 rounded-lg">
                <Image source={{uri: "https://guidable.co/wp-content/uploads/2018/10/fake-plastic-food-1487542_1920.jpg" }} className="h-20 w-30 rounded"/>
            </View>
            <View className="items-center">
                <Text className="text-sm">hello</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}