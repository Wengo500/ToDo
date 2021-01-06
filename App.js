import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.mainPurpose}>
        Year Purpose - Study English 
      </Text>
      </View>
      <View style={styles.taskList}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
  },
   header: {
    width: '100%',
    height: '50%',
    backgroundColor: '#839',
  },
  mainPurpose: {
    marginTop: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  taskList: {
    position: 'absolute',
    top: '35%',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },
});
