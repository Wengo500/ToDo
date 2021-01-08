import React from 'react';
import { Text, View } from 'react-native';
import styled from 'react-native-styled-components';


export default function TaskListComponent() {
  return (
      <TaskList>
        <Title>Task List</Title>
      </TaskList>
  );
}
 const TaskList = styled(View,{
    position: 'absolute',
    alignItems: 'center',
    top: '35%',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
 });
 const Title = styled(Text,{
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
 });
