import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from './components/screens/StartPage'
import SignUpPage from './components/screens/SignUpPage';
import { store } from './store'
import { Provider } from 'react-redux'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={StartPage}/>
          <Stack.Screen name="SignUp" component={SignUpPage}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
