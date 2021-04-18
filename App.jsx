import React from 'react';

import store from './src/redux/store';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { ConfirmProvider } from 'react-native-confirm-dialog'

import Navigator from './src/navigation/Navigator'

export default function App() {

  return (
    <Provider store={store}>
      <ConfirmProvider>
        <NavigationContainer>          
          <Navigator/>
        </NavigationContainer>
      </ConfirmProvider>    
    </Provider>
   )};



    

