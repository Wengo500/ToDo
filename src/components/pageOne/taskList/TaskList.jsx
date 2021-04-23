import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Task from './Task';


const taskListHeight = Dimensions.get('screen').height;
const taskListWidth = Dimensions.get('screen').width;

export default function TaskListComponent({selectPurpose}) {
 
  const chunks = selectPurpose.chunks === undefined? [] :  selectPurpose.chunks
    return (
      <TaskList>
        <Title>Task List</Title>
        {chunks.map((el,id)=>{
          return <Task taskItems={el} key={id}/>
        })}        
      </TaskList>
    );
  }
 const TaskList = styled.ScrollView`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${Math.floor(taskListHeight - taskListWidth /1.25)}px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: white;
 `;
 const Title = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  padding: 15px;
  margin: 0 auto;
 `;
    
