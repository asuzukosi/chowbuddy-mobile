import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OrderReceiptBoxDishCard from './OrderReceiptBoxDishCard'
import { useDispatch, useSelector } from 'react-redux';
import { getGroupedItems } from '../features/basketSlice';

export default function OrderReceiptBox({navigation}) {
  const groupedItems = useSelector(getGroupedItems)
  

  return (
    <View className="h-80 p-4 rounded-lg">
      <ScrollView>
        {
          groupedItems?.map(item => {
            return <OrderReceiptBoxDishCard id={item.id} key={item.id} name={item.name} count={item.count} image={item.image} restaurant={item.restaurant} price={item.price}/>
          })
        }
    </ScrollView>
    </View>
    
  )
}