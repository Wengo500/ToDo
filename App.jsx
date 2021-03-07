import React from 'react';
import Slick from 'react-native-slick';
import store from './src/redux/store';
import {Provider} from 'react-redux';


import PageOne from './src/components/pageOne/PageOne';
import PageTwo from './src/components/pageTwo/PageTwo';

export default function App() {

  return (
    <Provider store={store}>
     <Slick showsPagination={false}	loop={false} >
       
        <PageOne />
        <PageTwo />
        
      </Slick>
      </Provider>
   )};



    

