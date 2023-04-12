import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { requestTrackingPermissionsAsync, getTrackingPermissionsAsync } from 'expo-tracking-transparency';


// Sample using Intent Launcher
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';

// Open location settings
startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);

export default function RequestTrackingSample() {
    useEffect(() => {
      (async () => {
        const { status } = await requestTrackingPermissionsAsync();
        if (status === 'granted') {
          console.log('Yay! I have user permission to track data');
        }
      })();
    }, []);

    const checkForTrackingPermissionsAsync = async () => {
        const { granted } = await getTrackingPermissionsAsync();

            if (granted) {
            // Your app is authorized to track the user or their device
            }
    };
  
    return (
      <View style={styles.container}>
        <Text>Tracking Transparency Module Example</Text>
      </View>
    );
  }
  