import React from 'react';
import {StyleSheet, Text, View, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('screen')

export default function StartDate({date}) {
  const findDate = () => {
    const chunk = date === undefined ? 'select purpose' :
      date.find((el, id) => id === 0)
    return chunk.chunkStartDate;
  }

  return (
      <View style={styles.StartDate}>
        <Text style={styles.dateText}>Start date</Text>
        <Text style={styles.dateText} >{findDate()}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  StartDate: {
    position: 'absolute',
  },
  dateText: {
    color: 'white',
  }
});



