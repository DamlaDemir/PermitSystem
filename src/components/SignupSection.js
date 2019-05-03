import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text} from 'react-native';

class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Yeni Hesap</Text>
        <Text style={styles.text}>Şifremi Unuttum</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //borderWidth:5
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export {SignupSection};