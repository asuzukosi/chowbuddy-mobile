import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

// This component implements the communities card
export default function CommunitiesCard({navigation, name, id, image, description}) {
  return (
    <View>
       <TouchableOpacity className="relative mr-2" onPress={()=>{navigation.navigate("Community", {id:id, name:name, image:image, description:description})}}>
        <View>
            <View className="w-20 rounded-lg">
                <Image source={{uri: image}} className="h-20 w-30 rounded"/>
            </View>
            <View className="items-center">
                <Text className="text-sm">{name}</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}