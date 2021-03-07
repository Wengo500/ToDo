import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import HeaderComponent from './Header';
import TaskListComponent from './TaskList';

export default function PageOne() {
  return (
      <PageOneEl>
         <HeaderComponent />
         <TaskListComponent />
      </PageOneEl>
  );
}

const PageOneEl = styled.View`
 flex: 1;
`;