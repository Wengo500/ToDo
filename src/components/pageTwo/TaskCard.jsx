import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen')


export default function TaskCard({purposeName}) {
  return (
    <Card style={{width: width / 2 - 9, height: width / 3}}>
      <TaskName>{purposeName}</TaskName>
    </Card>
  );
}


const Card = styled.View`
 margin: 2.5px;
 background-color: rgba(248, 248, 248, 0.5);  
 color: red;
`;
const TaskName = styled.Text`
  text-align: center;
  margin: 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
 `;