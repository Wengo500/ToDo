import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import TaskCard from './TaskCard';
import CreateNewTask from './CreateNewTask';


function PageTwo({choosePurpose, allPurposes}) {
  const {navigate} = useNavigation();
  return (
    <PageTwoEl>          
      <PageTwoTitle>Purposes</PageTwoTitle>
      <Container>   

        {allPurposes.map(el=> 
          <TouchableOpacity key={el.id} onPress={()=> choosePurpose(el.id)}>
            <TaskCard purposeName={el.purposeName}/>
          </TouchableOpacity>
          )
        }
        <TouchableOpacity onPress={() => {navigate('Create Purpose')}}>
          <CreateNewTask />
        </TouchableOpacity>

      </Container>
    </PageTwoEl>
  )
}


const PageTwoEl = styled.ScrollView`
  background-color: #97CAE5;  
`;
const PageTwoTitle = styled.Text`
  padding: 25px 0 10px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4px;
`;

export default PageTwo;