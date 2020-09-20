import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
  return(
    <>
    <Header ></Header>
    <Text style={styles.text}>Hello World</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: 50
  }
});

export default CreateRecord;