import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function Task({taskItems}) {
  return (
      <Container>
       <Title>{taskItems.chunkName}</Title>
       <StartDate>{new Date(taskItems.chunkStartDate).toDateString().slice(0,-4)}</StartDate>
        <Description>{taskItems.chunkDescription}</Description>
      </Container>
  );
}
 const Container = styled.View`
  width: 95%;
  border-radius: 10px;
  background: rgba(50, 90, 250, .2);
  margin: 5px auto;
  padding: 5px;
 `;
 const Title = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
 `;
 const Description = styled.Text`
  color: rgba(50, 90, 250, .9);
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
 `;
    
 const StartDate = styled.Text`
  color: rgba(50, 90, 250, .5);
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
 `;
    
