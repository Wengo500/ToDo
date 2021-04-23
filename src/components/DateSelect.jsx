import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';


function DateSelect({newDate}) {
  const [date, setDate] = useState('Select start date');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    newDate(currentDate);
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
        <Button 
          onPress={showDatepicker}
          title={date !== 'Select start date'?
            date.toDateString().slice(0,-4) : date
          } 
        />
      </View>
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date==='Select start date'? new Date() :date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
};
 
 
export default DateSelect;