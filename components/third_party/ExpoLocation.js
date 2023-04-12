import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as Location from 'expo-location';

// Rember to set the location on the emulator from None to Custom Location

export default function ExpoLocation() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useEffect(null)

  useEffect(() => {
    (async () => {
      // request for location access from user
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      // set location when location is granted
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log('Location is : ' + JSON.stringify(location));
      })();
    }, []);

    // set the text on whether the location is available or not
    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
  return (
    <View className="mt-28">
      <Text>ExpoLocation the current location is {text}</Text>
    </View>
  )
}