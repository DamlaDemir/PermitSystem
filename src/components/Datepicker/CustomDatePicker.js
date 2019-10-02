import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Dimensions,Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';// indirmek için npm install moment --save
import CommonStyles from '../../assets/styles/CommonStyles';

 
class CustomDatePicker extends Component {

  constructor() {
    super();
  }

  renderText(){
    if(this.props.isSelected){
      datetime = moment(this.props.datetime).format('DD.MM.YYYY HH:mm');
      return (<Text style={CommonStyles.textStyle}>{datetime}</Text>)
    }
    else
    return (<Text style={CommonStyles.textStyle}>{this.props.text}</Text>)
  }
 
  render () {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress} >
        {this.renderText()}
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.props.isVisible}
          onConfirm={this.props.onConfirm}
          onCancel={this.props.onCancel}
          mode='datetime'
        />
      </View>
    );
  }
 
}

export {CustomDatePicker};