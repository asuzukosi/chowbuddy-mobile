import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { UserIcon, ShoppingBagIcon} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, loginUser } from '../features/userSlice';


// Header component which contains the Logo and the header icon
export default function NavigationBar({navigation}) {
  const currentUser = useSelector(getUserDetails);
  console.log("The current user from the navigation bar are :", currentUser);
  const profile_picture_url = "http://127.0.0.1:8000" + currentUser.user.profile_picture
  console.log("The profile picture is :", profile_picture_url);


  return (
    <View className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 flexspace-x-2 mt-10">
        {/* Logo Component Start */}
        <View className="bg-indigo-600 w-20 pl-2 mr-20">
          <Text className="text-white text-xl font-bold">
            Chow Buddy
          </Text>
        </View>
        {/* Logo Component End */}

        {/* Icon Section Start */}
        <View className="flex-row ml-10">
        <TouchableOpacity onPress={()=>{navigation.navigate("Orders")}}>
          <View className="bg-gray-200 w-10 h-10 rounded-lg items-center pt-2 mr-3">
            <ShoppingBagIcon className="items-center mt-3" size={25} color="bg-indigo-600"/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
          <View className="bg-gray-200 w-10 h-10 rounded-lg items-center pt-1 mr-3">
          <Image source={{uri: profile_picture_url }}
                    className="h-8 w-8 bg-gray-300 p-4 rounded-lg" />
          </View>
        </TouchableOpacity>
        <View className="w-0.5 h-10 mr-3 bg-gray-300"></View>
        <TouchableOpacity onPress={()=>{navigation.navigate("CommunitySelection")}}>
          <View className="bg-gray-200 w-10 h-10 rounded-lg items-center pt-2 mr-3">
            <UserIcon className="items-center mt-3" size={25} color="bg-indigo-600"/>
          </View>
        </TouchableOpacity>
        </View> 
        {/* Icon Section End */}
      </View>
    </View>
  )
}