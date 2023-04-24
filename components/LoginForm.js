import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { loginCustomer } from '../api/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, loginUser } from '../features/userSlice';
import { storeUser } from '../storage/async_storage';

 // This is the customer login form component
export default function LoginForm({navigation}) {

  // Set up the dispatch and state of the component
  const dispatch = useDispatch()
  const currentUserData = useSelector(getUserDetails)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log("The current user data is : ", currentUserData)

  
 // This function logs in a user based on the provided credentials and stores the user information on redux and async storage
 const loginUserFromForm = async (username, password) => {
      console.log("username is ", username)
      console.log("pasword is ", password)
      const userData = await loginCustomer(username, password)
      console.log("From the login user function the data is ", userData);
      // store user in redux store
      dispatch(loginUser(userData));
      // store user in async storage
      storeUser(userData);
      // navigate to home page
      navigation.navigate("Home")
    }
  
  // return the UI component
  return (
    <View className="flex flex-col max-w-md px-4 py-20 mt-12 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <Text className="text-3xl">Login</Text>
      <Text className="self-center mb-2 mt-2 text-lg font-light text-gray-800 dark:text-white">
        Sign in with your data you entered during registration
      </Text>

      <Text className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Don't have an account ? <Text onPress={()=>{navigation.navigate("SignUp")}} className="text-sm text-blue-500 underline hover:text-blue-700">Sign Up</Text>
      </Text>
      <View className="p-6 mt-3">
          <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='username' autoautoCapitalize='none' autoCorrect={false} defaultValue={username} onChangeText={newUsername=>setUsername(newUsername)}/>
          <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} onChangeText={newPassword=>setPassword(newPassword)}/>

          <TouchableOpacity className="rounded-lg mt-2 mb-3" 
          // When the login button is pressed it executes the login user
          // operation with the provided username and password
          onPress={()=>loginUserFromForm(username, password)}
          >
            <Text className="py-2 px-4 mt-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Login
            </Text>
          </TouchableOpacity>
      </View>
  </View>
  )
}