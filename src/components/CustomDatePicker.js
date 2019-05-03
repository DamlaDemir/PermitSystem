import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Dimensions,Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';// indirmek için npm install moment --save
import dateImg from '../images/datetime.png';

 
class CustomDatePicker extends Component {

  constructor() {
    super();
  }

  // state = {
  //   isDateTimePickerVisible: false,
  //   time:new Date(),
  //   IsSelectTime:false
  // };
  // _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  // _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  // _handleDatePicked = (date) => {
  //   console.log('A date has been picked: ', date);
  //   this.setState({time:moment(date).format('HH:mm')});
  //   console.log(this.state.time);
  //   this.setState({IsSelectTime:true});

  //   this._hideDateTimePicker();
  // };

  renderText(){
    debugger;
    const {textStyle}=styles;
    if(this.props.isSelected){
      datetime = moment(this.props.datetime).format('DD.MM.YYYY HH:mm');
      return (<Text style={textStyle}>{datetime}</Text>)

    }
    else
    return (<Text style={textStyle}>{this.props.text}</Text>)
  }
 
  render () {
    const {container,inputStyle,inlineImg}=styles;

    return (
      <View style={container}>
        <Image source={dateImg} style={inlineImg} />
        <TouchableOpacity onPress={this.props.onPress} style={inputStyle}>
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

export {CustomDatePicker};