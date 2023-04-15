import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import NavigationBarWithOnlyProfile from '../NavigationBarWithOnlyProfile'
import MapView, { Marker } from 'react-native-maps'
import DeliveryTrackingCard from '../DeliveryTrackingCard'
import { Accelerometer } from 'expo-sensors';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';


export default function DeliveryTrackingPage({navigation, route}) {
  const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });
  const [subscription, setSubscription] = useState(null);
  const [granted, setGranted] = useState(false);

  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);

  _fast();

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(setData)
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);


  // set the name of the background location task
  const LOCATION_TASK_NAME = 'background-location-task';

  const requestPermissions = async () => {
    if(!granted){
        const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
        if (foregroundStatus === 'granted') {
          const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
          if (backgroundStatus === 'granted') {
            await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
              accuracy: Location.Accuracy.Balanced,
            });
          }
        }
      setGranted(true);
    }
  };
requestPermissions()

// define the backroud location tak to update the location frequenty
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
        console.error(error);
      return;
    }
    if (data) {
      const { locations } = data;
      // do something with the locations captured in the background
      console.log(JSON.stringify(locations));
    }
  });


  return (
    <View className="flex-1">
      <NavigationBarWithOnlyProfile navigation={navigation}/>
      <MapView initialRegion={{
            latitude: route.params.deliverer.latitude,
            longitude : route.params.deliverer.longitude,
            longitudeDelta: 0.005,
            latitudeDelta: 0.005,
        }}
        className="flex-1 z-0"
        // mapType='mutedStandard'
        >
            <Marker
            coordinate={{ latitude: route.params.deliverer.latitude, longitude: route.params.deliverer.longitude}}
            title = "Deliverer current location"
            description = {"Accelerometer readings are: x("+x+") y("+y+") z("+z+")"}
            identifier="origin"
            pinColor = "#00CCBB"
        />
        </MapView>
        <DeliveryTrackingCard navigation={navigation} customer={route.params.customer} restaurant={route.params.restaurant} deliverer={route.params.deliverer} order={route.params.order}/>
    </View>
  )
}