// Import all required components and packages
import { View, Text, TouchableNativeFeedbackComponent, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import CommunitySelectionCard from './CommunitySelectionCard'
import { getAllCommunitiesOfAUser } from '../api/communities'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, loginUser } from '../features/userSlice';

// This component renders all the communities that the logged in user is a member of 
export default function MembershipCommunities({navigation}) {
  const [communities, setCommunities] = useState([])
  const [fetched, setFetched] = useState(false)
  const currentUser = useSelector(getUserDetails);


  // This is a function to fetch all the communities that the user belongs to from the API
  const getMembershipCommunities = async () => {
    if(!fetched){
      const communities =  await getAllCommunitiesOfAUser(currentUser.user.id)
      setCommunities(communities)
      setFetched(true)
    }
   
  }
  // Call the get memberships function
  getMembershipCommunities()

  // return the UI component
  return (
    <View>
      <View className="flex-row">
        <Text className="text-indigo-600 font-bold text-l flex-1">
            Membership
        </Text>
        <TouchableOpacity onPress={()=>{}}>
            <Text className="font-thin">
                See all
            </Text>
        </TouchableOpacity>
      </View>
        {
          communities?.map((community)=>{
            return <CommunitySelectionCard navigation={navigation} name={community.name} description={community.description}/>
                
          })
        }
    </View>
  )
}