import { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Menu({ navigation }){

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Button title="Cau1" onPress={() => navigation.navigate("Cau1") } />
        <Button title="Cau2" onPress={() => navigation.navigate("Cau2") } />
        <Button title="Cau3" onPress={() => navigation.navigate("Cau3") } />
    </View>
  );

}