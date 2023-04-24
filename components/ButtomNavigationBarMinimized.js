import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, HomeIcon, StarIcon, UserCircleIcon} from "react-native-heroicons/outline";

// This is the minimized version of the navigation bar that is used in the restaurant app view
export default function ButtomNavigationBarMinimized({navigation}) {
  return (
    <View className="h-30 py-4 absolute flex-row left-0 bottom-0 z-10 w-full bg-white px-5 pl-12 pb-10">
        {/* Button to navigate home */}
        <TouchableOpacity className="flex-1" onPress={()=>{navigation.navigate("Home")}}>
            <HomeIcon className="mb-4" size={25} color="black"/>
        </TouchableOpacity>

        {/* Button to navigate to the orders page */}
        <TouchableOpacity className="flex-end mr-10" onPress={()=>{navigation.navigate("OrdersPage")}}>
            <UserCircleIcon className="" size={25} color="black"/>
        </TouchableOpacity>
    </View>
  )
}