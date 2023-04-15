import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import { SocialIcon } from 'react-native-elements'
import { registerCustomer } from '../api/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, loginUser } from '../features/userSlice';
import { storeUser } from '../storage/async_storage';

export default function SignUpForm({navigation}) {

  const dispatch = useDispatch()
  const currentUserData = useSelector(getUserDetails)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  console.log("The current user data is : ", currentUserData)

  // making the API call to register the user from the API module
  const registerUser = async (username, password, first_name, last_name,email, phone_number, address) =>{
      const userData = await registerCustomer(username, password, first_name, last_name, email, phone_number, address);
      userData.type = "customer";
      // store user in redux store
      dispatch(loginUser(userData));
      // store user in async storage
      storeUser(userData);
      // navigate to home page
      navigation.navigate("Home")
  }

  return (
    <View className="flex flex-col max-w-md py-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">

        {/* Create new account message */}
        <Text className="self-center text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </Text>
        <Text className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Already have a new account ? <Text onPress={()=>{navigation.navigate("Login")}} className="text-sm text-blue-500 underline hover:text-blue-700">Sign In</Text>
        </Text>

        {/* Form section */}
        <View className="px-6 pt-2 mt-1">
        <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='first name' defaultValue={first_name} onChangeText={newFirstName=>setFirstName(newFirstName)}/>
            <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='last name' defaultValue={last_name} onChangeText={newLastName=>setLastName(newLastName)}/>
            <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='username' defaultValue={username} autoCapitalize='none' autoCorrect={false} onChangeText={newUsername=>setUsername(newUsername)}/>
            <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='email' textContentType='emailAddress' keyboardType='email-address' autoCapitalize='none' autoCorrect={false} autoCompleteType='email'defaultValue={email} onChangeText={newEmail=>setEmail(newEmail)}/>
            <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='address' defaultValue={address} onChangeText={newAddress=>setAddress(newAddress)}/>
            <TextInput className="rounded-lg mb-3 border-transparent border border-gray-300 py-2 px-2 shadow-sm bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='password' secureTextEntry={true} defaultValue={password} onChangeText={newPassword=>setPassword(newPassword)}/>

            {/* Registration Button */}
            <TouchableOpacity className="rounded-lg mt-2 mb-3" 
              onPress={()=>{registerUser(username, password, first_name, last_name, email, phone, address)}}
            // onPress={()=>{navigation.navigate("Home")}}
            >
              <Text className="py-2 px-4 mt-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Continue
              </Text>
            </TouchableOpacity>
          
          <View className="w-full items-center mb-1 mt-1">
            <Text>or</Text>
          </View>

          <TouchableOpacity>
            <SocialIcon
              title='Sign In With Facebook    '
              button
              type='facebook'/>
          </TouchableOpacity>

          <TouchableOpacity>
            <SocialIcon
              title='Sign In With Google    '
              button
              type='google'/>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <SocialIcon
              title='Continue In With Google    '
              button
              light={true}
              type='apple'/>
          </TouchableOpacity>

        </View>
    </View>
  )
}