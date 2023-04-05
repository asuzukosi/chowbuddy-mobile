import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CommunitySelectionCard({navigation}) {
  return (
    <View className="relative rounded-lg border border-gray-200 shadow-lg mt-2">
        <View className="flex-row items-center gap-4 p-4">
          <Image
            source={{uri: "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <View className="">
            <View className="flex-row">
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">
                    Carol Daines
                  </Text>
                </View>
                <Text className="text-sm text-gray-700">
                  10:49 AM
                </Text>
            </View>
              
              <Text className="line-clamp-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                laborum?
              </Text>
          </View>
        </View>
    </View>
  )
}