import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OrderReceiptBoxDishCard from './OrderReceiptBoxDishCard'
import { useDispatch, useSelector } from 'react-redux';
import { getGroupedItems } from '../features/basketSlice';


// This  component returns the order receipt box
export default function OrderReceiptBox({navigation}) {

  // gets all the grouped items based on the state in redux
  const groupedItems = useSelector(getGroupedItems)
  

  return (
    <View className="h-80 p-4 rounded-lg">
      <ScrollView>
        {
          // loops through all grouped items and renders them
          groupedItems?.map(item => {
            return <OrderReceiptBoxDishCard id={item.id} key={item.id} name={item.name} count={item.count} image={item.image} restaurant={item.restaurant} price={item.price}/>
          })
        }
    </ScrollView>
    </View>
    
  )
}