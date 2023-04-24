// Import the required packages and components
import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import NavigationBar from '../NavigationBar'
import MapView, { Marker } from 'react-native-maps'
import LocationSelectionCard from '../LocationSelectionCard'
import * as Location from 'expo-location';

// this implements the delivery location selection interface
export default function DeliveryLocationSelection({navigation, route}) {
  // set up the state for data in the component
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)


  console.log("The location of the restuarant for the marker is: ", route.params.restaurant)
  // Use the use effect to request location foreground permission for getting the users location
  useEffect(() => {
    (async () => {
      // request for location access from user
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      // set location when location is granted
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log('Location is : ' + JSON.stringify(location));
      })();
    }, []);

  // This is a function that decides if the map should be shown or not
  const showMap = () => {
    // It checks if the location has been fully set before showing the map
    if(location){
      return <>
                <MapView initialRegion={{
                latitude: location.coords.latitude,
                longitude : location.coords.longitude,
                longitudeDelta: 0.005,
                latitudeDelta: 0.005,
                }}
                className="flex-1 z-0"
                >
                    <Marker
                      coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude}}
                      title = "Customer Location"
                      description = "Your location" 
                      identifier="origin"
                      pinColor = "#00CCBB"/>

                    <Marker
                      coordinate={{ latitude: route.params.restaurant.lat, longitude: route.params.restaurant.long}}
                      title = "Delivery Location"
                      description = "Deliverer pickup point" 
                      identifier="destination"
                      pinColor = "#00CCBB"/>
                </MapView>
              </>
    }else {
      return <View></View>
    }
  }
  // return the UI component
  return (
    <View className="flex-1">
        <NavigationBar navigation={navigation}/>
        { 
          showMap()
        }
        <LocationSelectionCard navigation={navigation} customer={route.params.customer} deliverer={route.params.deliverer} restaurant={route.params.restaurant} order={route.params.order}/>
    </View>
  )
}