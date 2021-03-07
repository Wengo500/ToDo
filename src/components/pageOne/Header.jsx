import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import HeaderCounter from './HeaderCounter';
import StartDate from './StartDate'

import {LinearGradient} from 'expo-linear-gradient';


export default function HeaderComponent() {
  return (
      <Header >
        <LinearGradient style={styles.linearGradient}
         locations={[0,0.5]} 
         start={{x: 0.4, y:0}} 
         end={{x: 0.3, y: 1}} 
         colors={[ '#6e27b0', '#341272']} >
          <MainPurpose >Year Purpose - Study English </MainPurpose>
          <StartDate />
          <HeaderCounter />
          <FinishDate>Finish</FinishDate>
        </LinearGradient>
      </Header>
  );
}
const Header = styled.View`
    
`;

const FinishDate = styled.Text`
  position: absolute;
  top: 30%;
  right: 0;
  color: white;
  margin: 0 50px
`;
const MainPurpose = styled.Text`
  margin-top: 10%;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: white;
`;
  
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '70%',
  },
});
