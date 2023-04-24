// import required packages
import { View, Text } from 'react-native'
import React from 'react'
import NavigationBarWithOnlyProfile from '../NavigationBarWithOnlyProfile'
import MapView, { Marker } from 'react-native-maps'
import DeliveryRequestCard from '../DeliveryRequestCard'

// Implementation of the delivery request page
export default function DeliveryRequest({navigation, route}) {
  return (
    <View className="flex-1">
      <NavigationBarWithOnlyProfile navigation={navigation}/>
      <MapView initialRegion={{
            latitude: route.params.restaurant.lat,
            longitude : route.params.restaurant.long,
            longitudeDelta: 0.005,
            latitudeDelta: 0.005,
        }}
        className="flex-1 z-0"
        >
            <Marker
            coordinate={{ latitude: route.params.restaurant.lat, longitude: route.params.restaurant.long}}
            title = "Restaurant Location"
            description = "Your pickup point" 
            identifier="origin"
            pinColor = "#00CCBB"
        />
        </MapView>
        <DeliveryRequestCard navigation={navigation} customer={route.params.customer} restaurant={route.params.restaurant} deliverer={route.params.deliverer} order={route.params.order}/>
    </View>
  )
}