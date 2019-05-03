import React, { Component } from 'react';
import { View, TextInput, Dimensions, Image ,Alert} from 'react-native';
import { connect } from 'react-redux';
import { Container, Text, Content, Icon } from 'native-base';
import { CustomDatePicker, Button, PickerSelect, CustomInput } from '../../../components';
import { clickDatetimePicker, cancelDatetimePicker, setDateTime, selectPickerChecked,setExplanation,takePermit } from '../../../actions';
import Colors from '../../../assets/colors/Colors';
import Explain from '../../../images/explain.png';

 class AddTab extends Component {

  constructor(props){
    super(props);
    this._showDateTimePicker = this._showDateTimePicker.bind(this);
    this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
    this._handleDatePicked = this._handleDatePicked.bind(this); 
    this.state = {

    }
  }
  static navigationOptions = {
    title: 'İzin Ekleme Sayfası',
    headerRight: (<View></View>),
    headerStyle: {
      backgroundColor: Colors.PageBackColor,
      flex: 1,
      borderBottomWidth: 1,
      borderColor: Colors.DarkGreen
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: "center",
      justifyContent: 'center',
      //fontWeight: 'bold',
      textAlignVertical: 'center'
    },
  };//Steack navigator özelliğinden gelen sayfadaki headerın özellikleri

  //datetime picker için
  _showDateTimePicker (stateName,selectedDtp) {
    this.props.clickDatetimePicker({stateName,selectedDtp});
    console.log(this.props.stateName);
  };

  _hideDateTimePicker (selectedDtp) {
    this.props.cancelDatetimePicker(selectedDtp);
  } 

  _handleDatePicked  (datetime,isSelected,selectedDtp)  {
    this.props.setDateTime({stateName:this.props.stateName,datetime:datetime,isSelected:isSelected,selectedDtp:selectedDtp});

  };
  //datetime picker için

  state = {
    reason: "",
    isLoading: false
  };

  takePermit() {
    debugger;
    const permitParameters = {
      startTime:this.props.startTime,
      endTime: this.props.endTime,
      permitType:this.props.permitType,
      explanation:this.props.explanation
    }
    this.props.takePermit(permitParameters);
  }

  render() {
    const { container, inputStyle, button, inlineImg } = styles;
    return (
      <Container style={container}>
        <Content>
          <CustomDatePicker
            text="Başlangıç tarihini seçiniz"
            onPress={() => this._showDateTimePicker('startTime','isDtpVisibleStartTime')}
            isVisible={this.props.isDtpVisibleStartTime}
            onConfirm={date => this._handleDatePicked({date},'isSelectedStartTime','isDtpVisibleStartTime')}
            onCancel={() => this._hideDateTimePicker('isDtpVisibleStartTime')}
            isSelected={this.props.isSelectedStartTime}
            datetime={this.props.startTime}
          />
          <CustomDatePicker
            text="Bitiş tarihini seçiniz"
            onPress={() => this._showDateTimePicker('endTime','isDtpVisibleEndTime')}
            isVisible={this.props.isDtpVisibleEndTime}
            onConfirm={date => this._handleDatePicked({date},'isSelectedEndTime','isDtpVisibleEndTime')}
            onCancel={() => this._hideDateTimePicker('isDtpVisibleEndTime')}
            isSelected={this.props.isSelectedEndTime}
            datetime={this.props.endTime}
          />
          <PickerSelect style={inputStyle}
           onValueChange={value => {
            this.props.selectPickerChecked(value.value);
            }} />
            <CustomInput
            source={Explain}
            secureTextEntry={false}
            placeholder="İzin Alma Nedeni"
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={true}
            value={this.props.explanation}
            onChangeText={explanation => this.props.setExplanation(explanation)}
            inlineImg= {inlineImg}
            inputStyle= {inputStyle}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            multiline={true}
            numberOfLines={5}
            />
          <Button
            buttonStyle={button}
            onPress={this.takePermit.bind(this)}
            isLoading={this.props.isLoading}
            text="İZİN AL" />
        </Content>
      </Container>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = {
  container: {
    backgroundColor: Colors.PageBackColor
  },
  inputStyle: {
    backgroundColor: 'transparent',
    width: DEVICE_WIDTH - 40,
    height: 60,
    marginTop: 30,
    marginLeft: 15,
    paddingTop: 1,
    paddingLeft: 43,
    borderRadius: 5,
    borderBottomWidth: 1.25,
    borderColor: Colors.DarkGreen
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DarkGreen,
    height: 40,
    width: DEVICE_WIDTH - 40,
    zIndex: 100,
    margin: 30
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 23,
    top: 47,
  }
}

const mapStateToProps = ({ addTabResponse }) => {
  const { isDtpVisibleEndTime,isDtpVisibleStartTime,isSelectedStartTime,isSelectedEndTime, startTime,endTime,stateName,permitType,explanation,isLoading } = addTabResponse;
  return {
    isDtpVisibleEndTime,
    isDtpVisibleStartTime,
    isSelectedStartTime,
    isSelectedEndTime,
    stateName,
    startTime,
    endTime,
    permitType,
    explanation,
    isLoading

  };
};

export default connect(mapStateToProps, { clickDatetimePicker, cancelDatetimePicker, setDateTime,selectPickerChecked,setExplanation,takePermit })(AddTab);
