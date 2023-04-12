import { View, Text } from 'react-native'
import React from 'react'
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';


  // set the name of the background location task
  const LOCATION_TASK_NAME = 'background-location-task';

  const requestPermissions = async () => {
    const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
    if (foregroundStatus === 'granted') {
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus === 'granted') {
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
          accuracy: Location.Accuracy.Balanced,
        });
      }
    }
  };


// define the backroud location tak to update the location frequenty
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
        console.error(error);
      return;
    }
    if (data) {
      const { locations } = data;
      // do something with the locations captured in the background
      console.log(JSON.stringify(locations));
    }
  });

  

export default function SampleTaskManger() {
  return (
    <View>
      <Text>SampleTaskManger</Text>
      <Button onPress={requestPermissions} title="Enable background location" />
    </View>
  )
}