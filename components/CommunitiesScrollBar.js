import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CommunitiesCard from './CommunitiesCard'

export default function CommunitiesScrollBar({navigation}) {
  return (
    <View className="mb-2 mt-1">
      <ScrollView contentContainerStyle={{paddingHorizontal:15, paddingTop:10}}
                  horizontal showsHorizontalScrollIndicator={false}>
        <CommunitiesCard/>
        <CommunitiesCard/>
        <CommunitiesCard/>
        <CommunitiesCard/>
        <CommunitiesCard/>
        <CommunitiesCard/>
        <CommunitiesCard/>
        <CommunitiesCard/>
      </ScrollView>
    </View>
  )
}