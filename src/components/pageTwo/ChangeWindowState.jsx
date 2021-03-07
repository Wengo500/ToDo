import React from 'react';
import { TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

import {TaskWindowBtnActionCreator} from '../../redux/CreateTaskWindowReducer';


 function ChangeWindowState(props) {
  return (
  <TouchableOpacity onPress={() => props.changeTaskWindow()}>
   {props.component}
  </TouchableOpacity>)
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTaskWindow: ()=> dispatch(TaskWindowBtnActionCreator()),
  }
}
 
export default connect(null, mapDispatchToProps)(ChangeWindowState);