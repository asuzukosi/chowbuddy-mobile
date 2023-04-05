import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MembershipCommunities from '../MembershipCommunities'
import SuggestedCommunities from '../SuggestedCommunities'

export default function CommunitySelectionPage() {
  return (
    <View className="flex">
      <View className="">
        <Text className="font-bold mt-2 ml-3 text-xl">Communities</Text>
      </View>
      <View className="flext-1 flex p-4">
        <ScrollView>
          <View className="flex-1 mt-2">
            <MembershipCommunities/>
          </View>
          <View className="mt-6">
            <SuggestedCommunities/>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}