import { View, Text, TouchableNativeFeedbackComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import CommunitySelectionCard from './CommunitySelectionCard'

export default function MembershipCommunities({navigation}) {
  return (
    <View>
      <View className="flex-row">
        <Text className="text-indigo-600 font-bold text-xl flex-1">
            Membership
        </Text>
        <TouchableOpacity onPress={()=>{}}>
            <Text className="font-thin">
                See all
            </Text>
        </TouchableOpacity>
      </View>
      <CommunitySelectionCard/>
      <CommunitySelectionCard/>
      <CommunitySelectionCard/>
      <CommunitySelectionCard/>
    </View>
  )
}