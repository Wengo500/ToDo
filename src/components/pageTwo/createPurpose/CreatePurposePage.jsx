import React, { useState }  from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { useConfirm } from 'react-native-confirm-dialog';

import PurposeChunk from './PurposeChunk';
import {saveStoreData} from '../../../asyncStorage/storeData';

import {refreshActionCreator} from '../../../redux/refreshReducer';


function CreatePurposePage({navigation}) {
  // const key = (i=0) => i++
  const id = Math.random()
  const key = Math.random()
  const state = useSelector(state=> state)
  const dispatch = useDispatch()
  const confirm = useConfirm()
 
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputDescriptionValue, setInputDescriptionValue] = useState('')
  const [chunkComponentArr, setChunkComponentArr] = useState([])

  const getNewChunk = () => setChunkComponentArr(oldArr => [...oldArr, <PurposeChunk/>])

  const handlePress = (id) => confirm({
    title: 'Do you want delete chunk?',
    subtitle: "You can't do this!!!",
    titleStyle: {color: 'red'},
    cancelButtonStyle: {
      backgroundColor: '#1E90FF',
      borderColor: '#1E90FF',        
    },
    onConfirm: ()=> setChunkComponentArr(oldArr => [
      ...oldArr.slice(0, id),
      ...oldArr.slice(id + 1)
    ]),      
    cancelButtonLabelStyle: {color: 'white',},
    confirmButtonStyle: {backgroundColor: 'rgba(200, 50, 50, .8)'},
    confirmLabel: 'Yas',
  });

  const renderChunk = () => chunkComponentArr.map((el, id)=> {  
    return  <TouchableOpacity  onLongPress={() => handlePress(id)} key={id}>
              <PurposeChunk id={id}/>
            </TouchableOpacity>
  });

  return (
    <>
      <Container>
        <View style={styles.inputsWrapper}>
          <TextInput 
            style={styles.purposeInput} 
            clearTextOnFocus={true} 
            value={inputNameValue}
            onChangeText={(inputNameValue)=>setInputNameValue(inputNameValue)}
            placeholder='Input name your purpose'
            placeholderTextColor='rgba(250, 250, 250, .7)'
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
            placeholder='Input purpose description'
            placeholderTextColor='rgba(250, 250, 250, .7)'
          /> 
        </View>
        
        {renderChunk()}

        <TouchableOpacity style={styles.addTaskChunkBtn} onPress={()=>{getNewChunk()}}>   
          <Text style={{color: 'white',textAlign: 'center',fontSize: 20,}}>
            Add task chunk
          </Text>
        </TouchableOpacity>

      </Container>

      <Button 
        title={'Create purpose'}
        onPress={() => {
            navigation.goBack()
            saveStoreData(key, inputNameValue, inputDescriptionValue, state.chunks, id)
            dispatch(refreshActionCreator())
          }          
        }  
      />
    </>
  )
};
export default CreatePurposePage;

const Container = styled.ScrollView`
  flex: 1;
`;
const styles = StyleSheet.create({
  purposeInput: {
    marginBottom: 10,
    padding: 10,
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: 'rgba(250, 250, 250, .7)',
    borderRadius: 10,
    color: 'white',
    fontSize: 20,
  },
  inputsWrapper: {
    flex: 1, 
    marginBottom: 10,
    padding: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(50, 100, 200, .8)',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  addTaskChunkBtn: {
    backgroundColor: '#2296f3',
    width: 180, 
    padding: 6,
    marginBottom: 20, 
    marginTop:15,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});