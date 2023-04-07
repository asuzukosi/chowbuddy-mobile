import { View, Text } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import MapView, { Marker } from 'react-native-maps'
import LocationSelectionCard from '../LocationSelectionCard'


export default function DeliveryLocationSelection({navigation}) {
  return (
    <View className="flex-1">
        <NavigationBar navigation={navigation}/>
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
        <LocationSelectionCard navigation={navigation}/>
    </View>
  )
}