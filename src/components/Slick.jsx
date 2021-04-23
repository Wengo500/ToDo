import React, { useState, useEffect } from 'react';
import Slider , {} from 'react-native-slick';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

import PageOne from './pageTwo/PageTwo';
import PageTwo from './pageOne/PageOne';
import {getStoreData} from '../asyncStorage/storeData';


export default function SlickSlider() {

  const refresh = useSelector(state => state.refresh)
  const [pageIndex, setPageIndex] = useState(false);
  const [allPurposes, setAllPurposes] = useState([]);
  const [selectPurpose, setSelectPurpose] = useState({});
  // console.log(allPurposes)

  const getDataKeys = () => AsyncStorage.getAllKeys()
    .then(elem => elem.map(elem => getStoreData(elem)
      .then(res => setAllPurposes(allPurposes => [
        ...allPurposes.filter(el => el.id !== res.id), 
        res
      ]
    ))))
  
    useEffect(() => {
      getDataKeys()
    },[refresh])

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
      <PageTwo allPurposes={allPurposes} selectPurpose={selectPurpose}/>
      <PageOne  choosePurpose={choosePurpose} allPurposes={allPurposes}/>
    </Slider>
   )
};



    

