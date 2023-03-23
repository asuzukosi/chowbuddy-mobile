import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

export default function StartPage({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-indigo-600 flex-col justify-center items-center">
      <View className="mb-11 w-80 text-left ml-5">
        <Text className="text-5xl font-bold text-navy-700 text-left text-white">
          Food for Everyone
        </Text>
      </View>
      <TouchableOpacity 
        className="!z-5 mt-10 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-6 3xl:p-![18px] undefined"
        onPress={() => navigation.navigate('SignUp')}
        >
        <View className="relative justify-between text-center">
          <Text className="text-xl font-bold text-navy-700 text-center dark:text-white text-indigo-600">
              Get Started
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}