import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import HeaderComponent from './Header';
import TaskListComponent from './TaskList';

export default function PageOneComponent() {
  return (
      <PageOne>
         <HeaderComponent />
         <TaskListComponent />
      </PageOne>
  );
}

const PageOne = styled.View`
 flex: 1;
`;