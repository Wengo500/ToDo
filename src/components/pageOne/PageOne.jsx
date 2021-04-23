import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import HeaderComponent from './header/Header';
import TaskListComponent from './taskList/TaskList';

export default function PageOne({selectPurpose, allPurposes}) {
  return (
      <PageOneEl>
        {allPurposes.length === 0 ?
         <FirstScreen>{`You have not any purposes
 Slide left fore create first purpose`}</FirstScreen> : 
  null}
         <HeaderComponent selectPurpose={selectPurpose}/>
         <TaskListComponent selectPurpose={selectPurpose}/>
      </PageOneEl>
  );
}

const PageOneEl = styled.View`
 flex: 1;
`;
const FirstScreen = styled.Text`
 width: 100%;
 height: 100%;
 text-align: center;
 padding: 70% 20px ;
 background-color: #97CAE5;
 color: white;
 font-size: 25px;
 font-weight: bold;
 z-index: 20;
`;
