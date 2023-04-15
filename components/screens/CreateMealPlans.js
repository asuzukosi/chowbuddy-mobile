import { View, Text, ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import NavigationBar from '../NavigationBar'
import ButtomNaviagationBar from '../ButtomNaviagationBar'
import { Calendar } from 'react-native-calendars';
import MealPlanDishCard from '../MealPlanDishCard';
import { getGroupedItems } from '../../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as ExpoCalendar from 'expo-calendar';


export default function CreateMealPlans({navigation}) {
  const groupedItems = useSelector(getGroupedItems)

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCalendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await ExpoCalendar.getCalendarsAsync(ExpoCalendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);

  async function getDefaultCalendarSource() {
    const defaultCalendar = await ExpoCalendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }
  
  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await ExpoCalendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: ExpoCalendar.EntityTypes.REMINDER,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'Meal Plan',
      ownerAccount: 'personal',
      accessLevel: ExpoCalendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  }

  return (
    <View className="flex-1">
      <NavigationBar navigation={navigation}/>
      <View className="p-2">
          <Text className="font-extrabold text-gray-600">Meal Plan details</Text>
          <View className="mt-1 mb-2">
            <ScrollView className=" h-60">
              {
                groupedItems?.map(item => {
                    return <MealPlanDishCard  id={item.id} key={item.id} name={item.name} count={item.count} image={item.image} restaurant={item.restaurant} price={item.price}/>
                })
              }
            </ScrollView>
          </View>
          <Calendar onDayPress={(day) => createCalendar() }
                    onDayLongPress={(day) => createCalendar() }
                    onMonthChange={(date) => console.log('onMonthChange', date) }/>
      </View>
      <ButtomNaviagationBar navigation={navigation}/>
    </View>
  )
}