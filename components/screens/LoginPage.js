import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../LoginForm'
import NaviagationBarMinimized from '../NaviagationBarMinimized'

export default function LoginPage({navigation}) {
  return (
    <View>
      <NaviagationBarMinimized navigation={navigation}/>
      <LoginForm navigation={navigation}/>
    </View>
  )
}