import React, { useState, useEffect } from 'react';
import {StyleSheet, TextInput} from 'react-native';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';

import DateSelect from '../../DateSelect';

import {CreateChunkItemsArrActionCreator} from '../../../redux/chunkItemsReducer';


function PurposeChunk({id}) {
  const dispatch = useDispatch()
  const [chunkDate, setChunkDate] = useState('');
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputDescriptionValue, setInputDescriptionValue] = useState('')
  const newDate = (currentDate) => setChunkDate(()=> currentDate)

  useEffect(()=>{
    dispatch(CreateChunkItemsArrActionCreator(id, inputNameValue, inputDescriptionValue, chunkDate))
  },[inputNameValue, inputDescriptionValue, chunkDate])

  return (
    <Container>

      <DateSelect newDate={newDate}/>

      <TextInput 
        style={[styles.purposeInput]} 
        clearTextOnFocus={true} 
        value={inputNameValue}
        onChangeText={(inputNameValue)=>setInputNameValue(inputNameValue)}
        placeholder='Input task name'
        placeholderTextColor='#1E90FF'
      /> 

      <TextInput 
        style={ [styles.purposeInput,{height: 100, textAlignVertical: 'top'}]} 
        multiline={true}
        numberOfLines={4}
        clearTextOnFocus={true} 
        value={inputDescriptionValue}
        onChangeText={
          (inputDescriptionValue)=>
          setInputDescriptionValue(inputDescriptionValue)
        }
        placeholder='Input task description'
        placeholderTextColor='#1E90FF'
      /> 
      
    </Container>
  )
}
export default PurposeChunk;

const Container = styled.View`
padding: 10px;
margin: 5px 10px;
background-color: rgba(50, 90, 250, .2);
border-radius: 20px;
align-items: center;
`;

const styles = StyleSheet.create({
  purposeInput: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#1E90FF',
    color: '#1E90FF',
    padding:5,
    marginBottom: 10,
  },
});