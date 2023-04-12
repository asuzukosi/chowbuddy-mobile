import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Haptics from 'expo-haptics';

// use of haptics after special events

export default function SampleHaptics() {
  return (
    <View className="mt-28">
      <Text>SampleHaptics</Text>
      <Button
          title="Success"
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )
          }
        />
        <Button
          title="Error"
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Error
              )
          }
        />
        <Button
          title="Warning"
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning
              )
          }
        />
    </View>
  )
}