import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CommunitiesCard from './CommunitiesCard'
import { getAllCommunities } from '../api/communities'

export default function CommunitiesScrollBar({navigation}) {
  const [communities, setCommunites] = useState([])
  const getCommunitiesFromAPI = async ()=> {
    if(communities.length == 0){
      const api_communites = await getAllCommunities()
      setCommunites(api_communites)
      console.log(api_communites)
    }
    
  }
  getCommunitiesFromAPI()
  return (
    <View className="mb-2 mt-1">
      <ScrollView contentContainerStyle={{paddingHorizontal:15, paddingTop:10}}
                  horizontal showsHorizontalScrollIndicator={false}>
        {
          communities?.map((community)=>{
              return <CommunitiesCard navigation={navigation} key={community.id} name={community.name} id={community.id} image={community.image} description={community.description}/>
          })
        }
      </ScrollView>
    </View>
  )
}