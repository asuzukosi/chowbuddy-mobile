import { View, ScrollView, Text, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, loginUser } from '../features/userSlice';

// This is the component that returns all the community messages
export default function CommunityMessage({navigation, posts}) {
  const currentUser = useSelector(getUserDetails); // State used to store post information


  return (
    <ScrollView>
      {
        // Gets all the posts for that community
        posts?.map( post => {
           // This renders the post differently baed on if the post was made by the logged in user or not
            if(post.author.id == currentUser.user.id){
              return <View className="m-3 p-3 rounded-lg border border-gray-300 bg-blue-300 shadow-sm flex-end flex-row" key={post.id}>
                      <Text className="text-white font-bold text-right m-2 flex-1">{post.text}</Text>
                      <View>
                        <Image source={{uri: post.author.profile_picture}}
                                  className="h-8 w-8 bg-gray-300 p-4 rounded-lg" />
                        <Text>{post.author.username}</Text>
                      </View>
                      
                    </View>
            } else {
              return <View className="m-3 p-3 rounded-lg border border-gray-300 bg-gray-400 shadow-sm flex-row" key={post.id}>
                      <View>
                        <Image source={{uri:post.author.profile_picture }}
                                      className="h-8 w-8 bg-gray-300 p-4 rounded-lg" />
                          <Text>
                            {post.author.username}
                          </Text>
                      </View>
                        <Text className="text-white font-bold m-2">Welcome friend</Text>
                    </View>
            }
        })
      }
       
      
    </ScrollView>
    
  )
}