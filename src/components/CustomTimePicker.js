import React, { Component } from 'react';
import { Text, TouchableOpacity, View,Dimensions,Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';// indirmek için npm install moment --save
import timeImg from '../images/time.png';

 
class CustomTimePicker extends Component {

  constructor() {
    super();
  }
  state = {
    isDateTimePickerVisible: false,
    date:new Date(),
    IsSelectDate:false
  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({date:moment(date).format('DD.MM.YYYY HH:mm')});
    console.log(this.state.date);
    this.setState({IsSelectDate:true});
    this._hideDateTimePicker();
  };

  renderText(){
    const {textStyle}=styles;
    if(this.state.IsSelectDate)
    return (<Text style={textStyle}>{this.state.date}</Text>)
    else
    return (<Text style={textStyle}>{this.props.text}</Text>)
  }
 
  render () {
      const {container,inputStyle,inlineImg}=styles;
    return (
      <View style={container}>
        <Image source={timeImg} style={inlineImg} />
        <TouchableOpacity 
        onPress={this._showDateTimePicker} style={inputStyle}>
         {this.renderText()}
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode='datetime'
        />
      </View>
    );
  }
 
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = {
    container: {
        flex:1
    },
    inputStyle : {
        backgroundColor: 'transparent',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginTop: 30,
        marginLeft:15,
        paddingTop:5,
        paddingLeft:40,
        borderRadius: 5,
        color: '#ffffff',
        borderBottomWidth:1.25,
        borderColor:'#33691e',
      },
    textStyle: {
        color: 'black',
        backgroundColor: 'transparent'
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 200,
        width: 22,
        height: 22,
        left: 20,
        top: 35,

      }
}

export {CustomTimePicker};