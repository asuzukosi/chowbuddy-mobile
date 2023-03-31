import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from './components/screens/StartPage'
import SignUpPage from './components/screens/SignUpPage';
import OrdersPage from './components/screens/OrdersPage';
import CommunityPage from './components/screens/CommunityPage';
import CommunitySelectionPage from './components/screens/CommunitySelectionPage';
import ProfilePage from './components/screens/ProfilePage';
import { store } from './store'
import { Provider } from 'react-redux'

const getIsSignedIn = () => {
  // add business logic for checking if the user is signed in here
  return true
}


const Stack = createNativeStackNavigator();

export default function App() {
  const isSignedIn = getIsSignedIn();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isSignedIn ? (
          // pages for if the user is signed in
          <>
              <Stack.Screen name="Orders" component={OrdersPage}/>
              <Stack.Screen name="Profile" component={ProfilePage}/>
              <Stack.Screen name="CommunitySelection" component={CommunitySelectionPage} options ={{presentation: "modal"}}/>
          </>):(
          // pages for if the user is not signed in
          <>
              <Stack.Screen name="Start" component={StartPage}/>
              <Stack.Screen name="SignUp" component={SignUpPage}/>
          </>)}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
