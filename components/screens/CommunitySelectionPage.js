// Import required component and packages
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MembershipCommunities from '../MembershipCommunities'
import SuggestedCommunities from '../SuggestedCommunities'


// Implements the UI of the community selection page
export default function CommunitySelectionPage({navigation}) {
  return (
    <View className="flex">
      <View className="">
        <Text className="font-bold mt-2 ml-3 text-xl">Communities</Text>
      </View>
      <View className="flext-1 flex p-4">
        <ScrollView>
          <View className="flex-1 mt-2">
            <MembershipCommunities  navigation={navigation}/>
          </View>
          <View className="mt-6">
            <SuggestedCommunities navigation={navigation}/>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}