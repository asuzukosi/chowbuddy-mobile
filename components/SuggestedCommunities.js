// Imporet all required components and packages
import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import CommunitySelectionCard from './CommunitySelectionCard'
import { getSuggestedCommunities } from '../api/communities'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, loginUser } from '../features/userSlice';


// this compnent shows all the communities suggested to a user
export default function SuggestedCommunities({navigation}) {
  const [communities, setCommunities] = useState([])
  const currentUser = useSelector(getUserDetails);


  // This function fetches all suggested user information from the communities API
  const getUserSuggestedCommunities = async () => {
    if(communities.length == 0){
      console.log('fetching communities');
      const communities =  await getSuggestedCommunities(currentUser.user.id)
      console.log("The communities are: ", communities)
      setCommunities(communities)
    }
  }

  // get the suggested communities for the logged in user
  getUserSuggestedCommunities()

  return (
    <View>
      <View className="flex-row">
        <Text className="text-indigo-600 font-bold text-l flex-1">
            Suggested
        </Text>
        <TouchableOpacity onPress={()=>{}}>
            <Text className="font-thin">
                See all
            </Text>
        </TouchableOpacity>
      </View>
      { 
        // loop through the suggest communities and render the community card component
        communities?.map((community)=>{
          return <CommunitySelectionCard  navigation={navigation} name={community.name} description={community.description} key={community.id} id={community.id} image={community.image}/>
        })
      }
    </View>
  )
}