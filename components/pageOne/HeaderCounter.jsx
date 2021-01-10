import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, View } from 'react-native';
  
import {LinearGradient} from 'expo-linear-gradient';
// import RadialGradient from 'react-native-radial-gradient';

export default function HeaderCounter() {
  return (
     <Counter>
        <LinearGradient style={styles.linearGradient}
        locations={[0,0.3,0.5]} 
         start={{x: 0, y: 0}} 
         end={{x: 0, y: 2}} 
         colors={['#080631', 'rgba(2, 0, 131, 0.603)', '#080631']} >
          <CounterValue>365</CounterValue>
        </LinearGradient>
     </Counter> 
  );
}
  
const Counter = styled.View ` 
  margin: 5% auto;
`;
const CounterValue = styled.Text`
  color: #fff;  
  font-size: 54px;
  font-weight: bold;
`;
const styles = StyleSheet.create({
  linearGradient: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    width: 150,
    height: 150,
  },
});