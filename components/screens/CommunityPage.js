import { View, Text } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import CommunityHeadBar from '../CommunityHeadBar'
import CommunityMessage from '../CommunityMessage'
import CommunityMessageInput from '../CommunityMessageInput'
import { useState } from 'react'
import { getAllPostsOnACommunity, makePostOnCommunity } from '../../api/communities'

export default function CommunityPage({navigation, route}) {

  const [communityPosts, setCommunityPosts] = useState([])
  const [retrieved, setRetrieved] = useState(false)
  const getCommunityPosts = async () =>{
    if(retrieved === false){
      const posts = await getAllPostsOnACommunity(route.params.id)
      setCommunityPosts(posts)
      console.log("The community posts are: ", posts)
      setRetrieved(true)
    }
  }

  getCommunityPosts()

  const createCommunityPost = async (text, userId) => {
    console.log("Creating post for user: ", userId)
    if(text !== undefined && text !== null && text !== ""){
      const post = await makePostOnCommunity(text, userId, route.params.id)
      setRetrieved(false)
      getCommunityPosts()
    }
  }

  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
      <CommunityHeadBar navigation={navigation} name={route.params.name} image={route.params.image} description={route.params.description}/>
      <View className=" h-96">
        <CommunityMessage navigation={navigation} posts={communityPosts}/>
      </View>
      <CommunityMessageInput navigation={navigation} createPost={createCommunityPost}/>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}