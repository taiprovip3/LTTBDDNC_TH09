import {useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cau3() {

  const [ location, setLocation ] = useState({x: null, y: null, marginTop: 0, marginLeft: 0});
  const animMarginTop = useRef(new Animated.Value(0)).current;
  const animMarginLeft = useRef(new Animated.Value(0)).current;

  const onPressView = (e) => {
      const x = e.nativeEvent.locationX;
      const y = e.nativeEvent.locationY;
      console.log(x + ", " + y);
      const newLocation = {x: x, y: y, marginTop: x, marginLeft: y};
      setLocation(newLocation);
  };
  Animated.timing(animMarginTop, {
      toValue: location.x-25,
      duration: 1000,
      useNativeDriver: false,
  }).start();

  Animated.timing(animMarginLeft, {
      toValue: location.y-25,
      duration: 1000,
      useNativeDriver: false,
  }).start();

  return (
    <View style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPressView}
    >

        
        <Animated.View style={{ position:'absolute', top:animMarginLeft, left:animMarginTop }}>
            <Ionicons name="logo-octocat" size={50} color="red" />
        </Animated.View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    position: 'relative'
  }
});
