import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native';
//import {Actions} from 'react-native-router-flux';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

class Button extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={this.props.buttonStyle}
            onPress={this.props.onPress}
            activeOpacity={1}>
            {this.props.isLoading? (
              <ActivityIndicator size='small'/>
            ) : (
              <Text style={styles.text}>{this.props.text}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    //top: -130,
    alignItems: 'center',
    justifyContent: 'flex-start',
    //borderWidth:5
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});

export {Button};