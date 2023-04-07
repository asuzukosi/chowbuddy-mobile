import { View, Text } from 'react-native'
import React from 'react'
import NavigationBarWithOnlyProfile from '../NavigationBarWithOnlyProfile'
import MapView, { Marker } from 'react-native-maps'
import DeliveryTrackingCard from '../DeliveryTrackingCard'

export default function DeliveryTrackingPage({navigation}) {
  return (
    <View className="flex-1">
      <NavigationBarWithOnlyProfile navigation={navigation}/>
      <MapView initialRegion={{
            latitude: 33.518589,
            longitude : -86.810356,
            longitudeDelta: 0.005,
            latitudeDelta: 0.005,
        }}
        className="flex-1 z-0"
        // mapType='mutedStandard'
        >
            <Marker
            coordinate={{ latitude: 33.518589, longitude: -86.810356}}
            title = "Pickup Point"
            description = "Your pickup point" 
            identifier="origin"
            pinColor = "#00CCBB"
        />
        </MapView>
        <DeliveryTrackingCard navigation={navigation}/>
    </View>
  )
}