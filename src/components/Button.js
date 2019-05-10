import React, {Component} from 'react';
import Styles from '../assets/styles/styles';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

class Button extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
            style={this.props.buttonStyle}
            onPress={this.props.onPress}
            activeOpacity={1}>
            {this.props.isLoading? (
              <ActivityIndicator size='small'/>
            ) : (
              <Text style={[Styles.textStyle,{color:'white'}]}>{this.props.text}</Text>
            )}
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export {Button};