import React, { useState } from 'react';
import Slider , {} from 'react-native-slick';
import { useSelector } from 'react-redux';

import PageTwo from './pageTwo/PageTwo';
import PageOne from './pageOne/PageOne';

export default function SlickSlider() {
  const allPurposes = useSelector(state=> state.refresh)
  const [selectPurpose, setSelectPurpose] = useState({});
 console.log(allPurposes)

  const choosePurpose = (elId) => setSelectPurpose(()=> allPurposes.find(obj => obj.id === elId))

  return (
    <Slider showsPagination={false}  loop={false} index={0}>
      <PageOne selectPurpose={selectPurpose} allPurposes={allPurposes}/>
      <PageTwo allPurposes={allPurposes} choosePurpose={choosePurpose}/>    
    </Slider>
   )
};