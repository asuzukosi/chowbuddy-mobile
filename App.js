import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from './components/screens/StartPage'
import SignUpPage from './components/screens/SignUpPage';
import HomePage from './components/screens/HomePage';
import OrdersPage from './components/screens/OrdersPage';
import CommunityPage from './components/screens/CommunityPage';
import SearchPage from './components/screens/SearchPage';
import LoginPage from './components/screens/LoginPage';
import CommunitySelectionPage from './components/screens/CommunitySelectionPage';
import ProfilePage from './components/screens/ProfilePage';
import PaymentPage from './components/screens/PaymentPage';
import DeliveryConfirmationPage from './components/screens/DeliveryConfirmationPage';
import CreateMealPlans from './components/screens/CreateMealPlans';
import RestaurantOrdersPage from './components/screens/RestaurantOrdersPage';
import DeliveryLocationSelectionsPage from './components/screens/DeliveryLocationSelection';
import DeliverRequest from './components/screens/DeliveryRequest';
import DeliveryTrackingPage from './components/screens/DeliveryTrackingPage';

import { store } from './store'
import { Provider } from 'react-redux'
import RestaurantPage from './components/screens/RestaurantPage';


const getIsSignedIn = () => {
  // add business logic for checking if the user is signed in here
  return false
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
              <Stack.Screen name="Login" component={LoginPage}/>
              <Stack.Screen name="Home" component={HomePage}/>
              <Stack.Screen name="Search" component={SearchPage}/>
              <Stack.Screen name="Orders" component={OrdersPage}/>
              <Stack.Screen name="Profile" component={ProfilePage}/>
              <Stack.Screen name="CommunitySelection" component={CommunitySelectionPage} options ={{presentation: "modal"}}/>
              <Stack.Screen name="Community" component={CommunityPage}/>
              <Stack.Screen name="Restaurant" component={RestaurantPage}/>
              <Stack.Screen name="Payment" component={PaymentPage}/>
              <Stack.Screen name="DeliveryConfirmation" component={DeliveryConfirmationPage}/>
              <Stack.Screen name="CreateMealPlans" component={CreateMealPlans}/>
              <Stack.Screen name="RestaurantOrders" component={RestaurantOrdersPage}/>
              <Stack.Screen name="DeliveryLocationSelection" component={DeliveryLocationSelectionsPage}/>
              <Stack.Screen name="DeliveryRequest" component={DeliverRequest}/>
              <Stack.Screen name="DeliveryTracking" component={DeliveryTrackingPage}/>


          </>)}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
