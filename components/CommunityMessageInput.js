import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { PhotoIcon, PaperClipIcon } from "react-native-heroicons/outline";

export default function CommunityMessageInput({navigation}) {
  return (
    <View className="m-4 pt-4 rounded-xl border bottom-0 absolute w-11/12 mb-24 border-gray-300 shadow-sm">
      <TextInput className="p-2" placeholder='Write a message..'/>
      <View className="bg-gray-300 mt-1 p-4 flex-row rounded-b-xl">

        <TouchableOpacity className="mr-5">
          <PhotoIcon size={20} className="ml-2" color="gray"/>
        </TouchableOpacity>

        <TouchableOpacity>
          <PaperClipIcon size={20} className="ml-2" color="gray"/>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}