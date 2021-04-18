import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

import HeaderCounter from './HeaderCounter';
import StartDate from '../date/StartDate';
import FinishDate from '../date/FinishDate';


export default function HeaderComponent({selectPurpose}) {
// console.log(selectPurpose)
  return (
      <Header >
        <LinearGradient style={styles.linearGradient}
          locations={[0,0.7]} 
          start={{x: 0.4, y:0.1}} 
          end={{x: 0.1, y: 0.5}} 
          colors={[ '#6e27b0', '#341272']}
        >
          <MainPurpose >{selectPurpose.purposeName}</MainPurpose>
          <ItemsWrapper>
            <StartDate  date={selectPurpose.chunks} />
            <HeaderCounter />
            <FinishDate date={selectPurpose.chunks}/>
          </ItemsWrapper>       
        </LinearGradient>
      </Header>
  );
}
const Header = styled.View`
`;

const MainPurpose = styled.Text`
  margin-top: 10%;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: white;
`;
const ItemsWrapper = styled.View`
  justify-content: center;
  margin: 0 20px;
`;
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
  },
});
