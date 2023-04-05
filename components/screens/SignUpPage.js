import { View } from 'react-native'
import React from 'react'
import SignUpForm from '../SignUpForm'
import NaviagationBarMinimized from '../NaviagationBarMinimized'

export default function SignUpPage({navigation}) {
  return (
    <View>
      <NaviagationBarMinimized navigation={navigation}/>
      <SignUpForm navigation={navigation}/>
    </View>
  )
}
