import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import HeaderComponent from './header/Header';
import TaskListComponent from './TaskList';

export default function PageOne({selectPurpose}) {
  return (
      <PageOneEl>
         <HeaderComponent selectPurpose={selectPurpose}/>
         <TaskListComponent selectPurpose={selectPurpose}/>
      </PageOneEl>
  );
}

const PageOneEl = styled.View`
 flex: 1;
`;