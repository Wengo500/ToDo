import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen')


export default function TaskCard(props) {
  return (
      <Card style={{width: width / 2 - 9, height: width / 3}}>
        <TaskName>kk</TaskName>
      </Card>
  );
}


const Card = styled.View`
 margin: 2.5px;
 background-color: rgba(248, 248, 248, 0.5);  
`;
const TaskName = styled.Text`
  text-align: center;
  margin: 10px;
 `;