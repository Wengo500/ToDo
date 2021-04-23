import React from 'react';
import {StyleSheet, Text, View } from 'react-native';


export default function FinishDate({chunks}) {
  const findDate = () => {
    const chunk = chunks.find((el)=> el.chunkId === chunks.length-1)
    return new Date(chunk.chunkStartDate).toDateString().slice(0,-4)
  }

  return (
      <View style={styles.finishDate}>
        <Text style={styles.dateText}>Finish date</Text>
        <Text style={styles.dateText}>{chunks!==undefined?findDate() : null}</Text>
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