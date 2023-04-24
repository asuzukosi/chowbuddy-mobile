import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, HomeIcon, StarIcon, UserCircleIcon} from "react-native-heroicons/outline";

// Implementation of the bottom naviation bar
export default function ButtomNaviagationBar({navigation}) {
  return (
    <View className="h-30 py-4 absolute flex-row left-0 bottom-0 z-10 w-full bg-white px-5 pl-12 pb-10">
        {/* Button to Naviagate to Home */}
        <TouchableOpacity className="flex-1" onPress={()=>{navigation.navigate("Home")}}>
            <HomeIcon className="mb-4" size={25} color="black"/>
        </TouchableOpacity>

        {/* Button to navigatet to search */}
        <TouchableOpacity className="flex-1" onPress={()=>{navigation.navigate("Search")}}>
            <MagnifyingGlassIcon className="" size={25} color="black"/>
        </TouchableOpacity>

        {/* Button to navigate to create menu plans */}
        <TouchableOpacity className="flex-1" onPress={()=>{navigation.navigate("CreateMealPlans")}}>
            <StarIcon className="" size={25} color="black"/>
        </TouchableOpacity>

        {/* Button to navigate to create restaurant orders */}
        <TouchableOpacity className="flex-1" onPress={()=>{navigation.navigate("RestaurantOrders")}}>
            <UserCircleIcon className="" size={25} color="black"/>
        </TouchableOpacity>
    </View>
  )
}