import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CommunitySelectionCard from './CommunitySelectionCard'

export default function SuggestedCommunities({navigation}) {
  return (
    <View>
      <View className="flex-row">
        <Text className="text-indigo-600 font-bold text-xl flex-1">
            Suggested
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
    </View>
  )
}