import React, { useState, useEffect } from 'react';
import Slider , {} from 'react-native-slick';

import PageTwo from './pageTwo/PageTwo';
import PageOne from './pageOne/PageOne';
import {getAsyncData} from '../asyncStorage/storeData';


export default function SlickSlider() {

  const [pageIndex, setPageIndex] = useState(false);
  const [allPurposes, setAllPurposes] = useState([]);
  const [selectPurpose, setSelectPurpose] = useState({});
 
    (() => getAsyncData()
      .then(res => res === null ? [] : setAllPurposes(()=> res.map(el => el))))()
    
 
  const choosePurpose = (elId) => setSelectPurpose((selectPurpose)=> {
   selectPurpose = allPurposes.filter(obj => obj.id === elId)
   return selectPurpose[0]
  })

  // const changePageIndex = () => setPageIndex(pageIndex => pageIndex = !pageIndex)
  // const gotoPrev = () => {
  //   // slickPrev()
  // }
  
  return (
    <Slider showsPagination={false} slickGoTo={pageIndex === false ? 0 : 1} loop={false} index={0}>
      <PageOne selectPurpose={selectPurpose} allPurposes={allPurposes}/>
      <PageTwo allPurposes={allPurposes} choosePurpose={choosePurpose}  />    
    </Slider>
   )
};



    

