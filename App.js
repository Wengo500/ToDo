import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'react-native-styled-components';
import Slick from 'react-native-slick';


import HeaderComponent from './components/Header';
import TaskListComponent from './components/TaskList';

export default function App() {
  return (
     <Slick  showsPagination={false}	loop={false}>
        <PageOne >
          <HeaderComponent />
          <TaskListComponent />
          <StatusBar style="auto" />
        </PageOne>
        <PageTwo>
          <PageTwoTitle>Purposes</PageTwoTitle>
        </PageTwo>
      </Slick>
   )};

const PageOne = styled(View,{
    flex: 1,
});
const PageTwo = styled(View,{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#97CAE5',
});
const PageTwoTitle = styled(Text,{
    padding: 25,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
});