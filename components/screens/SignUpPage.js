// Import required packages and components
import { View } from 'react-native'
import React from 'react'
import SignUpForm from '../SignUpForm'
import NaviagationBarMinimized from '../NaviagationBarMinimized'

// This is the implementation of the sing up page
export default function SignUpPage({navigation}) {
  return (
    <View>
      <NaviagationBarMinimized navigation={navigation}/>
      <SignUpForm navigation={navigation}/>
    </View>
  )
}
