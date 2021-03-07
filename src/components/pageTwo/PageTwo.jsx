import React from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';


import TaskCard from './TaskCard';
import CreateNewTask from './CreateNewTask';
import CreateTaskWindow from './createTaskWindow/CreateTaskWindow';
import ChangeWindowState from './ChangeWindowState';

function PageTwo(state) {

  //   const renderPurpose = () => {
  //   return state.purpose.map(elem => {
  //     return <TaskCard purposeName={elem.purposeName} key={comment.id} />
  //   });
  // };
  return (
      <PageTwoEl>
          
          <PageTwoTitle>Purposes</PageTwoTitle>
          <Container>
            <TaskCard/>
            {/* {renderPurpose()} */}
            <ChangeWindowState component={CreateNewTask()}/>
          </Container>

          <CreateTaskWindow/>
          
      </PageTwoEl>
  );
}


const PageTwoEl = styled.View`
 flex: 1;
 background-color: #97CAE5;  
 align-items: center;
`;
const PageTwoTitle = styled.Text`
  padding: 25px 0 10px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;
const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4px;
`;


const mapStateToProps = (state) => {
  return {
    purpose: state.purpose
  }
}
 
 
export default connect(mapStateToProps)(PageTwo)