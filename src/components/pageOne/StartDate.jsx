import React from 'react';
import {StyleSheet, Text, View, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('screen')

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();


export default function StartDate() {
  return (
      <View style={[styles.StartDate, {left: width / 9, top: height / 7 - 20}]}>
        <Text style={styles.dateText}>Start</Text>
        <Text style={styles.dateText} >{day + '.' + month + '.' + year}</Text>
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



