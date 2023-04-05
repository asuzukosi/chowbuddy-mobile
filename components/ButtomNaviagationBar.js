import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, HomeIcon, StarIcon, UserCircleIcon} from "react-native-heroicons/outline";


export default function ButtomNaviagationBar({navigation}) {
  return (
    <View className="h-30 py-4 absolute flex-row left-0 bottom-0 z-10 w-full bg-white px-5 pl-12 pb-10">
        <TouchableOpacity className="flex-1" onPress={()=>{}}>
            <HomeIcon className="mb-4" size={25} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1" onPress={()=>{}}>
            <MagnifyingGlassIcon className="" size={25} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1" onPress={()=>{}}>
            <StarIcon className="" size={25} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1" onPress={()=>{}}>
            <UserCircleIcon className="" size={25} color="black"/>
        </TouchableOpacity>
    </View>
  )
}