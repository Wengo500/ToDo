import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, View, Dimensions } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

const {width} = Dimensions.get('screen')

export default function HeaderCounter() {
  return (
     <Counter style={{width: width / 3, height: width / 3}}>
          <CounterValue>365</CounterValue>
     </Counter> 
  );
}
  
const Counter = styled.View `
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 5% auto;
  background: black;
  border-radius: 80px;
`;
const CounterValue = styled.Text`
  color: #fff;  
  font-size: 54px;
  font-weight: bold;
`;
