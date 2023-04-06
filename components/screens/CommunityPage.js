import { View, Text } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import CommunityHeadBar from '../CommunityHeadBar'
import CommunityMessage from '../CommunityMessage'
import CommunityMessageInput from '../CommunityMessageInput'

export default function CommunityPage({navigation}) {
  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
      <CommunityHeadBar navigation={navigation}/>
      <CommunityMessage navigation={navigation}/>
      <CommunityMessageInput navigation={navigation}/>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}