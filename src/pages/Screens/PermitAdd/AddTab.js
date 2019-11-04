import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform,TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import {
  Input,
  Image,
  Icon,
  Text,
  ListItem,
} from "react-native-elements";
import DropdownAlert from "react-native-dropdownalert";
import DropDownAlertServices from '../../../services/DropdownAlertServices';
import { CustomDatePicker, Button, PickerSelect, CustomInput,Loading } from '../../../components';
import { clickDatetimePicker, cancelDatetimePicker, setDateTime, selectPickerChecked, setExplanation, AddOrUpdatePermit } from '../../../redux/actions';
import Colors from '../../../assets/colors/Colors';
import Explain from '../../../assets/images/explain.png';
import CommonStyles from '../../../assets/styles/CommonStyles';
import LocalStorageService from '../../../services/LocalStorageServices';
import StorageEnum from '../../../common/Enums/StorageEnum';
import PermitStatusEnum from '../../../common/Enums/PermitStatusEnum';
import PermitTypeEnum from '../../../common/Enums/PermitTypeEnum';
import dateImg from '../../../assets/images/datetime.png';
import SelectImage from '../../../assets/images/check.png';
import { 
  ADD_PERMIT_DATETIME_CLICK, 
  ADD_PERMIT_DATETIME_CANCEL, 
  ADD_PERMIT_DATETIME_SET, 
  ADD_PERMIT_TYPE_PICKER_CHECKED, 
} from '../../../redux/actions/types';

const options = [
  { label: 'Yıllık İzin', value: 1 },
  { label: 'Doğum İzni', value: 2 }
]
class AddTab extends Component {

  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'İzin İşlemleri',
    headerRight: (<View ></View>),
    headerStyle: {
      backgroundColor: Colors.lightWhite,
      borderBottomWidth: 1,
      borderColor: Colors.blueberry,
    },
    headerTintColor: Colors.blueberry,
    headerTitleStyle: CommonStyles.textStyle
  };//Steack navigator özelliğinden gelen sayfadaki headerın özellikleri

  //datetime picker için
  _showDateTimePicker(stateName, selectedDtp) {
    this.props.clickDatetimePicker(ADD_PERMIT_DATETIME_CLICK,stateName, selectedDtp );
    console.log(this.props.stateName);
  };

  _hideDateTimePicker(selectedDtp) {
    this.props.cancelDatetimePicker(ADD_PERMIT_DATETIME_CANCEL,selectedDtp);
  }

  _handleDatePicked(datetime, isSelected, selectedDtp) {
    // Sayfada 2 tane datetime picker olduğu için her iki datetşme için reducerda tip tanımlayıp aynı işlemleri yapmamak için parametrik yapıldı.
    // 2. parametre baslangıç veya bitiş tarihinin tutulacağı state ad(2 si için farklı değişken var hangisi dolsun bunu belirliyoruz)
    //isSelected parametresi başlangıç veya bitiş hangisini seçmişiz hangisine veri dolacak bunu belirler.
    // selected dtp başlangıç yada bitiş hangisi seçildiyse saat seçme işlemi bittikten sonra visible özelliğini false yapmak için
    this.props.setDateTime( ADD_PERMIT_DATETIME_SET,this.props.addPermit_stateName, datetime.date,  isSelected, selectedDtp );

  };
  //datetime picker için

  AddOrUpdatePermit() {
    LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
      const permitParameters = {
        sno : this.props.pertmitNo,
        StartDate: this.props.addPermit_startTime,
        EndDate: this.props.addPermit_endTime,
        AnnualType_sno: this.props.addPermit_permitType.value,
        Reason: this.props.explanation,
        Personnel_sno: user.value.Id,
        Status: this.props.addPermit_permitStatus,
        RequestDate : this.props.requestDate
      }
      this.props.AddOrUpdatePermit(permitParameters);
    });
  }

  render() {
    if(this.props.addPermit_permitType != -1){
      var pickerProps = { value: this.props.addPermit_permitType}
    }
    return (
      <Container style={CommonStyles.container}>
        <Content>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
              
              <ListItem
              containerStyle={CommonStyles.listContainerStyle}
              title={
                <CustomDatePicker
                text="Başlangıç tarihini seçiniz"
                onPress={() => this._showDateTimePicker('addPermit_startTime', 'addPermit_isDtpVisibleStartTime')}
                isVisible={this.props.addPermit_isDtpVisibleStartTime}
                onConfirm={date => this._handleDatePicked({ date }, 'addPermit_isSelectedStartTime', 'addPermit_isDtpVisibleStartTime')}
                onCancel={() => this._hideDateTimePicker('addPermit_isDtpVisibleStartTime')}
                isSelected={this.props.addPermit_isSelectedStartTime}
                datetime={this.props.addPermit_startTime}
                mode = "datetime"
              />
              }
              leftIcon={        
              <Image source={dateImg} style={CommonStyles.inlineImg} />
            }
            />
              <ListItem
              containerStyle={CommonStyles.listContainerStyle}
              title={           
                <CustomDatePicker
                text="Bitiş tarihini seçiniz"
                onPress={() => this._showDateTimePicker('addPermit_endTime', 'addPermit_isDtpVisibleEndTime')}
                isVisible={this.props.addPermit_isDtpVisibleEndTime}
                onConfirm={date => this._handleDatePicked({ date }, 'addPermit_isSelectedEndTime', 'addPermit_isDtpVisibleEndTime')}
                onCancel={() => this._hideDateTimePicker('addPermit_isDtpVisibleEndTime')}
                isSelected={this.props.addPermit_isSelectedEndTime}
                datetime={this.props.addPermit_endTime}
                mode = "datetime"
              />
              }
              leftIcon={        
              <Image source={dateImg} style={CommonStyles.inlineImg} />
            }
            />
              <ListItem
              containerStyle={CommonStyles.listContainerStyle}
              title={            
                <PickerSelect 
                placeholder={'İzin türünü seçiniz'}
                options = {options}
                HeaderText = "İzin Türleri"
                onValueChange = {val => {
                  let permitType = { value: val.value, label: val.value == PermitTypeEnum.YILLIK ? "Yıllık İzin" : "Doğum İzni" }
                  this.props.selectPickerChecked(ADD_PERMIT_TYPE_PICKER_CHECKED,permitType);
                }}
                {...pickerProps} />
              //   <OPicker
              //   enabled={true}
              //   onChange={permitType => this.props.selectPickerChecked(ADD_PERMIT_TYPE_PICKER_CHECKED,permitType)}
              //   data={options}
              //   returnType="obj"
              //   label={["text"]}
              //   format="%text%"
              //   value="value"
              //   defaultLabel={"İzin Türü Seçiniz"}
              // />
              }
              leftIcon={        
              <Image source={SelectImage} style={CommonStyles.inlineImg} />
            }
            />    
              <ListItem
              containerStyle={CommonStyles.listContainerStyle}
              title={
                <TextInput
                secureTextEntry={false}
                placeholder="İzin Alma Nedeni"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={true}
                value={this.props.explanation}
                onChangeText={explanation => this.props.setExplanation(explanation)}
                placeholderTextColor="black"
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={1}
                style = {[CommonStyles.textStyle,{padding:0}]}
              />              
              }
              leftIcon={        
              <Image source={Explain} style={CommonStyles.inlineImg} />
            }
            />     
            <Button
              buttonStyle={[CommonStyles.alignmentStyle, CommonStyles.buttonStyle]}
              onPress={this.AddOrUpdatePermit.bind(this)}
              text="KAYDET" />
               <Loading loading={this.props.addPermitLoading} />
              <DropdownAlert ref={ref => DropDownAlertServices.setDropDownAlert(ref)} />  
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ addTabResponse }) => {
  const {
    explanation,
    addPermitLoading,
    addPermit_isDtpVisibleStartTime,
    addPermit_isDtpVisibleEndTime,
    addPermit_isSelectedStartTime,
    addPermit_isSelectedEndTime,
    addPermit_stateName,
    addPermit_startTime,
    addPermit_endTime,
    addPermit_permitType,
    pertmitNo,
    addPermit_permitStatus,
    requestDate
  } = addTabResponse;
  return {
    addPermit_isDtpVisibleEndTime,
    addPermit_isDtpVisibleStartTime,
    addPermit_isSelectedStartTime,
    addPermit_isSelectedEndTime,
    addPermit_stateName,
    addPermit_startTime,
    addPermit_endTime,
    addPermit_permitType,
    explanation,
    addPermitLoading,
    pertmitNo,
    addPermit_permitStatus,
    requestDate
  };
};

const actionCreators = {
  clickDatetimePicker, 
  cancelDatetimePicker, 
  setDateTime, 
  selectPickerChecked, 
  setExplanation, 
  AddOrUpdatePermit
}

export default connect(mapStateToProps, actionCreators)(AddTab);

