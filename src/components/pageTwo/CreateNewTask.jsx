import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen')


export default function CreateNewTask() {
  return (
      <Card style={{width: width / 2 - 9, height: width / 3}}>
        <Plus>+</Plus>
      </Card>
  );
}


const Card = styled.View`
  align-items: center;
  justify-content: center;
  margin: 2.5px;
  background-color: rgba(248, 248, 248, 0.5);

`;
 const Plus = styled.Text`
  color: rgba(100, 250, 500, 0.9);
  font-size: 140px
  margin-bottom: 10px;
 `;