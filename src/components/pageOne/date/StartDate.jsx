import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function StartDate({chunks}) {
  const findDate = () => {
    const chunk = chunks === undefined ? 'select purpose' :
      chunks.find((el, id) => id === 0)
      
    return new Date(chunk.chunkStartDate).toDateString().slice(0,-4);
  }

  return (
      <View style={styles.StartDate}>
        <Text style={styles.dateText}>Start date</Text>
        <Text style={styles.dateText} >{chunks!==undefined?findDate() : null}</Text>
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



