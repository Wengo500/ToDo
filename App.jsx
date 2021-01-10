import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Slick from 'react-native-slick';

import PageOneComponent from './components/pageOne/PageOne';

export default function App() {
  return (
     <Slick  showsPagination={false}	loop={false}>
        <PageOneComponent />
         
          <StatusBar style="auto" />
        
        <PageTwo>
          <PageTwoTitle>Purposes</PageTwoTitle>
        </PageTwo>

      </Slick>
   )};


const PageTwo = styled.View`
 flex: 1;
 align-items: center;
 background-color: #97CAE5;  
`;
const PageTwoTitle = styled.Text`
  padding: 25px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;
    

