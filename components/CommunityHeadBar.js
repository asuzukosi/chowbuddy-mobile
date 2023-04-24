import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from "react-native-heroicons/outline";

// This is the heeadr bar for the communities page
export default function CommunityHeadBar({navigation, name, image}) {

  // This sets the url based on if it is a relative path or absolute path
  let url = ''
  if(image.startsWith("http")){
     url = image
  }else {
     url = "http://127.0.0.1:8000" + image
  }
  // Returns the UI code
  return (
    <View className="p-4 flex-row">
      <TouchableOpacity className="flex-1" onPress={()=>{navigation.navigate("CommunitySelection")}}>
          <View className="bg-gray-200 w-10 h-10 rounded-full items-center pt-2 mr-3">
            <ArrowLeftIcon className="items-center mt-3" size={25} color="bg-indigo-600"/>
          </View>
        </TouchableOpacity>
      <Text className="font-extrabold text-lg mt-1" >{name}</Text>

      <TouchableOpacity className="flex-end ml-11" onPress={()=>{}}>
          <View className="bg-gray-200 w-10 h-10 rounded-full items-center pt-1 mr-3">
          <Image source={{uri: url}}
                    className="h-8 w-8 bg-gray-300 p-4 rounded-full" />
          </View>
        </TouchableOpacity>

    </View>
  )
}