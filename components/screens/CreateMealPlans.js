import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import { Calendar } from 'react-native-calendars';
import MealPlanDishCard from '../MealPlanDishCard';


export default function CreateMealPlans({navigation}) {
  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
      <View className="p-2">
          <Text className="font-extrabold text-gray-600">Meal Plan details</Text>
          <View className="mt-1 mb-2">
            <ScrollView className=" h-60">
              <MealPlanDishCard />
              <MealPlanDishCard /> 
              <MealPlanDishCard />
              <MealPlanDishCard />
              <MealPlanDishCard />
            </ScrollView>
          </View>
          <Calendar onDayPress={(day) => console.log('onDayPress', day) }
                    onDayLongPress={(day) => console.log('onDayLongPress', day) }
                    onMonthChange={(date) => console.log('onMonthChange', date) }/>
      </View>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}