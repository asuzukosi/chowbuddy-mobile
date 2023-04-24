// import all the required components and packages
import { View, Text } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import CommunityHeadBar from '../CommunityHeadBar'
import CommunityMessage from '../CommunityMessage'
import CommunityMessageInput from '../CommunityMessageInput'
import { useState } from 'react'
import { getAllPostsOnACommunity, makePostOnCommunity } from '../../api/communities'

// This is the implementation of the community page
export default function CommunityPage({navigation, route}) {

  // set up the default states used in the component
  const [communityPosts, setCommunityPosts] = useState([])
  const [retrieved, setRetrieved] = useState(false)

  // this function gets all the posts on the community from the API
  const getCommunityPosts = async () =>{
    if(retrieved === false){
      const posts = await getAllPostsOnACommunity(route.params.id)
      setCommunityPosts(posts)
      console.log("The community posts are: ", posts)
      setRetrieved(true)
    }
  }

  // gets all the community posts
  getCommunityPosts()

  // This function is used to create a new post on the community by specifying the text and the user ID
  const createCommunityPost = async (text, userId) => {
    console.log("Creating post for user: ", userId)
    if(text !== undefined && text !== null && text !== ""){
      const post = await makePostOnCommunity(text, userId, route.params.id)
      setRetrieved(false)
      getCommunityPosts()
    }
  }
  // renders the UI components
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