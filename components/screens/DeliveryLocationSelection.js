import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import NavigationBar from '../NavigationBar'
import MapView, { Marker } from 'react-native-maps'
import LocationSelectionCard from '../LocationSelectionCard'
import * as Location from 'expo-location';

export default function DeliveryLocationSelection({navigation, route}) {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)


  console.log("The location of the restuarant for the marker is: ", route.params.restaurant)
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

  const showMap = () => {
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