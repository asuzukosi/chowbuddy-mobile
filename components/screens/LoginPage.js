// import required packages and components
import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../LoginForm'
import NaviagationBarMinimized from '../NaviagationBarMinimized'

// This is the implementation of the login page of the application
export default function LoginPage({navigation}) {
  return (
    <View>
      <NaviagationBarMinimized navigation={navigation}/>
      <LoginForm navigation={navigation}/>
    </View>
  )
}