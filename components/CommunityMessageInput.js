import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { PhotoIcon, PaperClipIcon, PaperAirplaneIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, loginUser } from '../features/userSlice';

export default function CommunityMessageInput({navigation, createPost}) {
  const [inputText, setText] = useState('')
  const currentUser = useSelector(getUserDetails);
  console.log("The current text is :", inputText);


  return (
    <View className="m-4 pt-4 rounded-xl border bottom-0 absolute bg-white w-11/12 mb-24 border-gray-300 shadow-sm">
      <TextInput className="p-2" placeholder='Write a message..' onChangeText={(newText)=>setText(newText)}/>
      <View className="bg-gray-300 mt-1 p-4 flex-row rounded-b-xl">

        <TouchableOpacity className="mr-5" onPress={()=>createPost(inputText, currentUser.user.id)}>
          <PaperAirplaneIcon size={20} className="ml-2" color="gray"/>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}