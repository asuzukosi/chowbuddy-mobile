import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {PlusIcon, MinusIcon} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, getNumberOfDishes, removeFromBasket, selectEntireBasket } from '../features/basketSlice';
import { setBasket } from '../storage/async_storage';



export default function RestaurantDishCard({navigation, name, restaurantName, restaurantId, id, image, price}) {
  const dispatch = useDispatch();
  const numberOfItems = useSelector((state)=> getNumberOfDishes(state, id));
  const entireBasket = useSelector(selectEntireBasket);

  setBasket(entireBasket)
  console.log(entireBasket);
  const dishObject = {
    name: name,
    id: id,
    price: price,
    image: image,
    restaurant: {
      id: restaurantId,
      name: restaurantName,
    }
  }


  return (
    <View className="flex-row p-2 bg-gray-200 rounded-lg mt-2">
      <Image source={{uri: "http://127.0.0.1:8000" + image}} className="h-16 w-16 object-cover transition duration-500 group-hover:scale-105 sm:h-42 rounded-lg"/>
      <View className="ml-2">
        <Text className="text-sm w-40">
            {name}
        </Text>
        <Text className="text-sm text-gray-600 font-light">
            {restaurantName}
        </Text>
        <Text className="text-md text-indigo-600">
            ${price}
        </Text>
      </View>
      <View className="flex-row ml-3 mt-4">
        <TouchableOpacity className="bg-indigo-500 p-2 rounded-lg h-7 ml-2" onPress={()=>{dispatch(removeFromBasket(dishObject))}}>
            <MinusIcon color="white" size={15}/>
        </TouchableOpacity>
        <Text className="ml-1 mt-1 font-bold text-md">{numberOfItems}</Text>
        <TouchableOpacity className="bg-indigo-500 p-2 rounded-lg h-7 ml-1" onPress={()=>{dispatch(addToBasket(dishObject))}}>
            <PlusIcon color="white" size={15}/>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}