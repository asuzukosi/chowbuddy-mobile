import { View, Text, Platform} from 'react-native'
import React, { useEffect } from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import OrderTotalBox from '../OrderTotalBox'
import OrderReceiptBox from '../OrderReceiptBox'
import { requestTrackingPermissionsAsync, getTrackingPermissionsAsync } from 'expo-tracking-transparency';

// Sample using Intent Launcher
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';

// Open location settings
if(Platform.OS !== "ios"){
  // platform dependent code, will only run if the platform is android
  startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);

}


export default function OrdersPage({navigation}) {
  useEffect(() => {
            (async () => {
              const { status } = await requestTrackingPermissionsAsync();
              if (status === 'granted') {
                console.log('Yay! I have user permission to track data');
              }
            })();
          }, []);

  const checkForTrackingPermissionsAsync = async () => {
          const { granted } = await getTrackingPermissionsAsync();

              if (granted) {
              // Your app is authorized to track the user or their device
              }
          };

  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
        <View className="p-3">
          <Text className="font-extrabold text-xl">Order Basket</Text>
        </View>
        <OrderReceiptBox navigation={navigation}/>
        <OrderTotalBox navigation={navigation}/>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}