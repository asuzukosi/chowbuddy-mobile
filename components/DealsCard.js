import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { ClockIcon, ShoppingBagIcon} from "react-native-heroicons/outline";

// This is the component used to show the available deals
export default function DealsCard() {
  return (
    <TouchableOpacity className="group relative block overflow-hidden rounded-xl mb-4 ml-2 mr-2">
        <ImageBackground className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-42" source={{uri: "https://w0.peakpx.com/wallpaper/532/96/HD-wallpaper-purple-macaroons-happy-birtay-cupcake-cake-on-purple-background-burning-candle-1-year-concepts-sweets.jpg" }}>
            <View class="absolute inset-0 bg-black/25 z-10">
                <View className="flex-row px-3">
                    <Text className="z-10 text-white ml-4 mt-3 font-extrabold text-xl flex-1">All deserts</Text>
                    <Text className="z-10 text-white ml-4 mt-3 text-sm ">Deserty</Text>
                </View>
                <View>
                    <Text className="text-3xl text-indigo-800 font-extrabold mt-4 ml-6">20% off</Text>
                </View>
            </View>
        </ImageBackground>
    </TouchableOpacity>
  )
}