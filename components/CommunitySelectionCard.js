import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CommunitySelectionCard({navigation, name, description, image, id}) {
  return (
    <TouchableOpacity className="relative rounded-lg border border-gray-200 shadow-lg mt-2" onPress={()=>{navigation.navigate("Community",{id:id, name:name, image:image, description:description})}}>
        <View className="flex-row items-center gap-4 p-4">
          <Image
            source={{uri: "http://127.0.0.1:8000" + image}}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <View className="">
            <View className="flex-row">
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">
                    {name}
                  </Text>
                </View>
                <Text className="text-sm text-gray-700">
                  10:49 AM
                </Text>
            </View>
              
              <Text className="line-clamp-1 text-sm text-gray-500">
                {description}
              </Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}