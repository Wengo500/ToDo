import React from 'react';
import { StyleSheet, Text, Dimensions, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

import ChangeWindowState from '../ChangeWindowState'; 
// import {newPurposesReducerActionCreator} from '../../../redux/CreateNewPurposeReducer';

let newPurposeName = React.createRef()
let newPurposeTask = React.createRef()

 function CreateTaskWindow(state) {

    const addNewPurpose = () => { 
      
        let purposeName = newPurposeName.current.value;
        let purposeTask = newPurposeTask.current.value;

          if (purposeName && purposeTask !== '') state.newPurpose(purposeName, purposeTask);
            else alert('Please write your Purpose name and task');
        
        purposeName = newPurposeName.current.value ='';
        purposeTask = newPurposeTask.current.value ='';
      };


  const {width, height} = Dimensions.get('screen')

  return (
      <DialogWindow style={{width: width - (state.taskWindow === true ? 10  : width),
       height: height - (state.taskWindow === true ? height - height * 0.83 : height) }}>
        <ChangeWindowState component={<CloseBtn>X</CloseBtn>}/>

          <KeyboardAvoidingView  behavior="position" keyboardVerticalOffset={0}
            resetScrollToCoords={{ x: 0, y: 0 }}
          >
           
              <TextInput style={styles.TextInput}  placeholderTextColor="#000" placeholder="Enter purpose name"/>
              <TextInput style={styles.TextInput}  placeholderTextColor="#000" placeholder="Enter purpose"/>
               
                <TouchableOpacity 
                // onPress={() => addNewPurpose()}
                >
                  <Text style={styles.Start}>START</Text>
                </TouchableOpacity>
            
          </KeyboardAvoidingView> 
      </DialogWindow>
  );
}
const styles = StyleSheet.create({
  TextInput: {
    marginBottom: 2.5,
    margin: 5,
    padding: 5,
    backgroundColor: 'red',
  },
  Start: {
    textAlign: 'center',
    color: 'green',
    fontSize: 20,
  }
});


const DialogWindow = styled.View`
  position: absolute;
  margin-bottom: 10px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;
 const CloseBtn = styled.Text`
  text-align: right;
  color: red;
  font-size: 50px;
 `;
 const StartBtn = styled.View`
  margin: 20px auto;
  padding: 5px 20px;
  max-width: 150px;
  border-radius: 20px;
  background: red;
 `;


const mapStateToProps = (state) => {
  return {
    purpose: state.purpose,
    taskWindow: state.taskWindow
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     newPurpose: (purposeName, purposeTask) => dispatch(newPurposesReducerActionCreator(purposeName, purposeTask))
//   }
// }
 
 
export default connect(mapStateToProps)(CreateTaskWindow)