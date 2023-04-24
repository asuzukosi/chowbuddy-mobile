// Import required packages and components
import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import NavigationBarWithOnlyProfile from '../NavigationBarWithOnlyProfile'
import MapView, { Marker } from 'react-native-maps'
import DeliveryTrackingCard from '../DeliveryTrackingCard'
import { Accelerometer } from 'expo-sensors';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

// this is the implementation of the delivery tracking page
export default function DeliveryTrackingPage({navigation, route}) {

  // inititate the state of the coordinates in component
  const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });
  const [subscription, setSubscription] = useState(null);
  const [granted, setGranted] = useState(false);
  

  // set up accelerometer update speed
  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);
  
  // set fast acceloremeter update speed
  _fast();

  // listen the accelerometer speed updates
  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(setData)
    );
  };


  // stop listening to accelerometer speed updates
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  // use useeffect to start listening to accelerometer speed updates
  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);


  // set the name of the background location task
  const LOCATION_TASK_NAME = 'background-location-task';

  // requrest permission to track location
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

// request locatioin permission
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

  // render UI component
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