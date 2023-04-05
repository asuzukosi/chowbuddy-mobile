import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SocialIcon } from 'react-native-elements'


export default function SignUpForm({navigation}) {
  return (
    <View className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <Text className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </Text>
        <Text className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Already have a new account ? <Text onPress={()=>{navigation.navigate("Login")}} className="text-sm text-blue-500 underline hover:text-blue-700">Sign In</Text>
        </Text>
        <View className="p-6 mt-8">
            <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='username'/>
            <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='email'/>
            <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='password' secureTextEntry={true}/>

            <TouchableOpacity className="rounded-lg mt-2 mb-3" onPress={()=>{navigation.navigate("Home")}}>
              <Text className="py-2 px-4 mt-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Continue
              </Text>
            </TouchableOpacity>
          
          <View className="w-full items-center mb-2 mt-2">
            <Text>or</Text>
          </View>

          <TouchableOpacity>
            <SocialIcon
              title='Sign In With Facebook    '
              button
              type='facebook'/>
          </TouchableOpacity>

          <TouchableOpacity>
            <SocialIcon
              title='Sign In With Google    '
              button
              type='google'/>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <SocialIcon
              title='Continue In With Google    '
              button
              light={true}
              type='apple'/>
          </TouchableOpacity>

        </View>
    </View>
  )
}