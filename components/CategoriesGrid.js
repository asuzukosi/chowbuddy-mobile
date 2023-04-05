import { View, Text, TouchableOpacity, Image  } from 'react-native'
import React from 'react'
import { UserIcon} from "react-native-heroicons/outline";


export default function CategoriesGrid() {
  return (
    <View className="max-w-screen-xl ml-3 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <View className="grid flex-row grid-col-4 gap-5 sm:grid-cols-3">
            <TouchableOpacity className="block rounded-xl border align-middle items-center border-indigo-300 bg-indigo-100 p-4 px-7 shadow-sm hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring ml-3 w-30">
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/hamburger.png")}/>
                <Text className="mt-2 font-bold">Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity className="block rounded-xl border align-middle items-center border-indigo-300 bg-indigo-100  p-4 px-7 shadow-sm hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring ml-3 w-30">
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/pizza.png")}/>
                <Text className="mt-2 font-bold">Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity className="block rounded-xl border align-middle items-center border-indigo-300 bg-indigo-100  p-4 px-7 shadow-sm hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring ml-3 w-30">
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/barbecue.png")}/>
                <Text className="mt-2 font-bold">BBQ</Text>
            </TouchableOpacity>
        </View>
        <View className="grid flex-row grid-col-4 gap-5 sm:grid-cols-3 mt-2">
            <TouchableOpacity className="block rounded-xl border align-middle items-center border-indigo-300 bg-indigo-100 p-4 px-7 shadow-sm hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring ml-3 w-30">
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/sushi.png")}/>
                <Text className="mt-2 font-bold">Sushi</Text>
            </TouchableOpacity>
            <TouchableOpacity className="block rounded-xl border align-middle items-center border-indigo-300 bg-indigo-100  p-4 px-7 shadow-sm hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring ml-3 w-30">
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/avocado.png")}/>
                <Text className="mt-2 font-bold">Vegan</Text>
            </TouchableOpacity>
            <TouchableOpacity className="block rounded-xl border align-middle items-center border-indigo-300 bg-indigo-100  p-3 px-5 shadow-sm hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring ml-3 w-30">
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/cupcake.png")}/>
                <Text className="mt-2 font-bold">Dessert</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}
