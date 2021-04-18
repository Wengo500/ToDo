import React from 'react';
import {StyleSheet, Text, View, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('screen')

export default function FinishDate({date}) {
  const findDate = () => {
    const chunk = date === undefined ? 'select purpose' :
      date.find((el, id) => id === 0)
    return chunk.chunkStartDate;
  }

  return (
      <View style={styles.finishDate}>
        <Text style={styles.dateText}>Finish date</Text>
        <Text style={styles.dateText}>{findDate()}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  finishDate: {
    position: 'absolute',
    right: 0,
  },
  dateText: {
    color: 'white',
  }
});