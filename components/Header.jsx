import React from 'react';
import { Text, View } from 'react-native';
import styled from 'react-native-styled-components';

export default function HeaderComponent() {
  return (
      <Header >
        <MainPurpose >Year Purpose - Study English </MainPurpose>
      </Header>
  );
}
const Header = styled(View,{
   width: '100%',
   height: '50%',
   backgroundColor: '#839',
});
const MainPurpose = styled(Text,{
    marginTop: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
});

