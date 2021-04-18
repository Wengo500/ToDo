import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SlickSlider  from '../components/Slick';
import CreatePurposePage from '../components/pageTwo/createPurpose/CreatePurposePage';


const Stack = createStackNavigator();

const Navigator = () => {
  
  return( 
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={SlickSlider} 
        options={{headerShown: false}} 
      />
      
      <Stack.Screen 
        name="Create Purpose" 
        component={CreatePurposePage}  
        options={{        
          headerStyle: {
            backgroundColor: 'rgba(50,100,200,1)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
          },
        }}
      />
    </Stack.Navigator>
  )
}
     
export default Navigator;