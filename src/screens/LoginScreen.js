import React from 'react';
import { StyleSheet, Image, View, ImageBackground } from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FillButton } from '../components/FillButton';

export function LoginScreen({ navigation }) {
  return (
    <ImageBackground style={styles.bgimg} source={require("../images/imagebg.jpg")}>
      <ImageBackground style={styles.bgimg2} source={require("../images/white.jpg")}>
        <Image style={styles.img} source={require("../images/mainlogo.png")} />
        <Input
          style={styles.input}
          placeholder="Username or Email Address"
          placeholderTextColor="#000"
        />
        <Input
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry
        />
        <FillButton title={'Login'} style={styles.fbutton} />
        <FillButton
          title={'Create an Account'}
          style={styles.fbutton}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
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
    marginVertical: 140,
  },
  img: {
    height: 120,
    width: 120,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
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
