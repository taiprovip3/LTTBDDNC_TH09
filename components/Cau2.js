import {useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cau2() {

  const [mouse1, setMouse1] = useState({ topValue: new Animated.Value(0), leftValue: new Animated.Value(0) });
  const [mouse2, setMouse2] = useState({ topValue: new Animated.Value(0), leftValue: new Animated.Value(0) });
  const [mouse3, setMouse3] = useState({ topValue: new Animated.Value(0), leftValue: new Animated.Value(0) });

  const onPressView = (e) => {
  };

  useEffect(() => {
    Animated.timing(mouse1.topValue, {
      toValue: Math.floor(Math.random() * 570),
      duration: 1000,
      useNativeDriver: false
    }).start();
    Animated.timing(mouse1.leftValue, {
      toValue: Math.floor(Math.random() * 320),
      duration: 1000,
      useNativeDriver: false
    }).start();
  },[mouse1]);

  useEffect(() => {
    Animated.timing(mouse2.topValue, {
      toValue: Math.floor(Math.random() * 570),
      duration: 1000,
      useNativeDriver: false
    }).start();
    Animated.timing(mouse2.leftValue, {
      toValue: Math.floor(Math.random() * 320),
      duration: 1000,
      useNativeDriver: false
    }).start();
  },[mouse2]);

  useEffect(() => {
    Animated.timing(mouse3.topValue, {
      toValue: Math.floor(Math.random() * 570),
      duration: 1000,
      useNativeDriver: false
    }).start();
    Animated.timing(mouse3.leftValue, {
      toValue: Math.floor(Math.random() * 320),
      duration: 1000,
      useNativeDriver: false
    }).start();
  },[mouse3]);

  const onMouse1Click = () => {
    console.log('mouse1 clicked');
    setMouse1({  topValue: new Animated.Value(Math.floor(Math.random() * 570)), leftValue: new Animated.Value(Math.floor(Math.random() * 320))  });
  };
  const onMouse2Click = () => {
    console.log('mouse2 clicked');
    setMouse2({  topValue: new Animated.Value(Math.floor(Math.random() * 570)), leftValue: new Animated.Value(Math.floor(Math.random() * 320))  });
  };
  const onMouse3Click = () => {
    console.log('mouse3 clicked');
    setMouse3({  topValue: new Animated.Value(Math.floor(Math.random() * 570)), leftValue: new Animated.Value(Math.floor(Math.random() * 320))  });
  };



  return (
    <View style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPressView}
    >

        
        <Animated.View style={{ position:'absolute', top:mouse1.topValue, left:mouse1.leftValue }}>
            <MaterialCommunityIcons name="mouse-variant" size={24} color="black" onPress={onMouse1Click} />
        </Animated.View>
        <Animated.View style={{ position:'absolute', top:mouse2.topValue, left:mouse2.leftValue }}>
            <MaterialCommunityIcons name="mouse-variant" size={24} color="black" onPress={onMouse2Click} />
        </Animated.View>
        <Animated.View style={{ position:'absolute', top:mouse3.topValue, left:mouse3.leftValue }}>
            <MaterialCommunityIcons name="mouse-variant" size={24} color="black" onPress={onMouse3Click} />
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
