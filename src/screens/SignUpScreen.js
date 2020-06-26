import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FillButton } from '../components/FillButton';

export function SignUpScreen() {
  return (
    <ImageBackground style={styles.bgimg} source={require("../images/imagebg.jpg")}>
      <ImageBackground style={styles.bgimg2} source={require("../images/white.jpg")}>
        <Heading>Sign Up for Binary</Heading>
        <Input
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#000"
        />
        <Input
          style={styles.input}
          placeholder="Email Addresss"
          placeholderTextColor="#000"
        />
        <Input
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          key
        />
        <Input
          style={styles.input}
          placeholder="Re-Enter Password"
          placeholderTextColor="#000"
          secureTextEntry
        />
        <FillButton title={'Register'} style={styles.fbutton} />
      </ImageBackground>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgimg: {
    width: '100%',
    height: '100%',
  },
  bgimg2: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    margin: 10,
    marginVertical: 150,
  },
  input: {
    padding: 10,
    marginVertical: 10,
  },
  fbutton: {
    fontWeight: '500',
    marginVertical: 6,
  },
});
