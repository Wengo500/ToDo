import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';

import getStartDate from '../redux/thunk/dataThunk';

function DateSelect() {
  const stateDate = useSelector(state=> state.startDate.date)
  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    dispatch(getStartDate(currentDate))
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };


  return (          
    <View style={{width: '100%', marginBottom: 10}}>
      <View>
        <Button onPress={showDatepicker} title={`${stateDate}`} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
 
 
export default DateSelect;