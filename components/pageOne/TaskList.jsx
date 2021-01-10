import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function TaskListComponent() {
  return (
      <TaskList>
        <Title>Task List</Title>
      </TaskList>
  );
}
 const TaskList = styled.View`
  position: absolute;
  align-items: center;
  top: 35%;
  height: 100%;
  width: 100%;
  border-radius: 40px;
  background: white;
 `;
   
 
 const Title = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  padding: 15px;
 `;
    
