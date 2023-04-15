import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import { VirtualKeyboard } from 'react-native-screen-keyboard';
import DeliveryConfirmationItem from '../DeliveryConfirmationItem';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function DeliveryConfirmationPage({navigation, route}) {
  const dishOrders = route.params.order.meal.dish_orders
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barCodeScannerInput, setBarCodeScannerInput] = useState(false);
  const [code, setCode] = useState("");

  useEffect(() => {
          const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
          };

          getBarCodeScannerPermissions();
        }, []);

  const handleBarCodeScanned = ({ type, data }) => {
          setScanned(true);
          alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        };

        if (hasPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }

        if (hasPermission === false) {
          return <Text>No access to camera</Text>;
        }

  const showBarCode =() => {
      if(barCodeScannerInput){
        return <>
          <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                  style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
          </>
      }
      else {
        return <></>
      }
  }
  const toggleShowBarCode =() => {
    setBarCodeScannerInput(!barCodeScannerInput);
  }

  const keyPressedHandler = (key) => {
    if(key !== 'back'){
      let newCode = code
      newCode += key
      setCode(newCode)
    } else {
      navigation.navigate("Home")
    }
  }
  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
        <View className="p-4 mt-3">
            <Text className="text-lg font-light">Delivery Confirmation</Text>
            <View className="border border-gray-300 w-full mt-3 mb-3"></View>
            <Text className="font-bold">Order details</Text>
            <Text className="font-extralight text-sm text-gray-400 mb-4">Delivered by {route.params.deliverer.user.username}</Text>
            <ScrollView className="h-48">
              {
                dishOrders?.map(dishOrder=>{
                  return <DeliveryConfirmationItem dish={dishOrder.dish} restaurant={dishOrder.dish.restaurant} price={dishOrder.amount} key={dishOrder.id} quantity={dishOrder.quantity}/>
                })
                
              }
              {
                showBarCode()
              }
            </ScrollView>
            <View className="items-center p-4 bg-gray-300 flex-row space-x-6">
              <TouchableOpacity className="">
                  <Text className="font-bold">{code}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-black rounded-lg p-2" onPress={()=>{toggleShowBarCode()}}>
                <Text className="text-white">barcode</Text>
              </TouchableOpacity>
            </View>
            <VirtualKeyboard onKeyDown={(key)=>{keyPressedHandler(key)}} onChange={()=>{}}/>
        </View>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}