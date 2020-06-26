import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export function Input({ style, ...props }) {
  return <TextInput {...props} style={[styles.input, style]} />;
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: '#ccf',
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
  },
});
