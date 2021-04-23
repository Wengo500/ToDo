import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, View, Dimensions } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

const {width} = Dimensions.get('screen')

export default function HeaderCounter({chunks}) {

  const findStartDate = () => {
    const chunk = chunks.find((el, id) => id === 0)     
    return new Date(chunk.chunkStartDate)
  }
 
  const findFinishDate = () => {
   const chunk = chunks.find((el)=> el.chunkId === chunks.length-1)
    return new Date(chunk.chunkStartDate)
  }
  const getDays = () => {
    let start = new Date(findStartDate())
    let finish = new Date(findFinishDate())
    return Math.floor((finish.getTime() - start.getTime())/(1000*60*60*24))+1
  }

  return (
     <Counter style={{width: width / 3, height: width / 3}}>
        <CounterValue>{chunks === undefined ? null : getDays()}</CounterValue>
     </Counter> 
  );
}
  
const Counter = styled.View `
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 0 auto;
  background: black;
  border-radius: 80px;
`;
const CounterValue = styled.Text`
  color: #fff;  
  font-size: 54px;
  font-weight: bold;
`;
