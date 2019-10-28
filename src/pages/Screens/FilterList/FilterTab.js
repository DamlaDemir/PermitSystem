import React, { Component } from 'react';
import { View, ScrollView,Image } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import { connect } from 'react-redux';
import {ListItem} from "react-native-elements";
import { AccordionComponent,CustomDatePicker,PickerSelect, Button,Loading } from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../assets/styles/CommonStyles';
import PermitSystemAPI from '../../../services/PermitSystemAPI';
import LocalStorageService from '../../../services/LocalStorageServices';
import DropdownAlert from "react-native-dropdownalert";
import DropDownAlertServices from '../../../services/DropdownAlertServices';
import StorageEnum from '../../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../../common/Enums/PermitTypeEnum';
import { 
    clickDatetimePicker, 
    cancelDatetimePicker, 
    setDateTime, 
    selectPickerChecked, 
    takePermit,
    getPermitList,
    selectPersonelPickerChecked,
    getPersonelList
 } from '../../../redux/actions';
import BaseComponent from '../../../common/Base';
import dateImg from '../../../assets/images/datetime.png';
import CommonStyles from '../../../assets/styles/CommonStyles';
import SelectImage from '../../../assets/images/check.png';
import UserImage from '../../../assets/images/User-icon.png';

const options = [
    {
      label: 'Onaylanmadı',
      value: 0
    },
    {
      label: 'Onaylandı',
      value: 1
    },
    {
      label: 'Onay Bekleniyor',
      value: 2
    },
  ]

class FilterTab extends BaseComponent {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'FİLTRELEME', 
    };

  componentDidMount () {
    this.props.getPersonelList();
  }

  
   //datetime picker için
   _showDateTimePicker(stateName, selectedDtp) {
    this.props.clickDatetimePicker({ stateName, selectedDtp });
    console.log(this.props.stateName);
    };

  _hideDateTimePicker(selectedDtp) {
    this.props.cancelDatetimePicker(selectedDtp);
    }

  _handleDatePicked(datetime, isSelected, selectedDtp) {
    this.props.setDateTime({ stateName: this.props.stateName, datetime: datetime, isSelected: isSelected, selectedDtp: selectedDtp });
    };
  //datetime picker için

  getPermitListByFilter() {
    debugger;
    var permitRequest = {};
    permitRequest.StartDate = this.props.startTime;
    permitRequest.EndDate = this.props.endTime;
    permitRequest.PermitStatus = this.props.pickerValue;
    permitRequest.UserId = this.props.personelId;
    this.props.getPermitList(permitRequest);
  }

  renderAuth(){
        if (this.props.personnel.length > 0 ) {              
            return(
                <ListItem
                containerStyle={CommonStyles.listContainerStyle}
                title={            
                  <PickerSelect 
                  placeholder={'Personel seçiniz'}
                  options = {this.props.personnel}
                  HeaderText = "Personeller"
                  onValueChange={value => {
                    this.props.selectPersonelPickerChecked(value.value);
                  }} />
                }
                leftIcon={        
                <Image source={UserImage} style={CommonStyles.inlineImg} />
              }
              /> 
            );
        } 
  }

    render() {
      if(this.props.permitList.length > 0 && this.props.loadPermitList){
        this.getPermitListByFilter();
      }
        return (
            <Container style={Styles.container}>
                <Content>        
                <ListItem
                containerStyle={CommonStyles.listContainerStyle}
                title={
                    <CustomDatePicker
                    text="Başlangıç tarihini seçiniz"
                    onPress={() => this._showDateTimePicker('startTime', 'isDtpVisibleStartTime')}
                    isVisible={this.props.isDtpVisibleStartTime}
                    onConfirm={date => this._handleDatePicked({ date }, 'isSelectedStartTime', 'isDtpVisibleStartTime')}
                    onCancel={() => this._hideDateTimePicker('isDtpVisibleStartTime')}
                    isSelected={this.props.isSelectedStartTime}
                    datetime={this.props.startTime}
                    mode = "date"
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
                onPress={() => this._showDateTimePicker('endTime', 'isDtpVisibleEndTime')}
                isVisible={this.props.isDtpVisibleEndTime}
                onConfirm={date => this._handleDatePicked({ date }, 'isSelectedEndTime', 'isDtpVisibleEndTime')}
                onCancel={() => this._hideDateTimePicker('isDtpVisibleEndTime')}
                isSelected={this.props.isSelectedEndTime}
                datetime={this.props.endTime}
                mode = "date"
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
                placeholder={'İzin Durumu seçiniz'}
                options = {options}
                HeaderText = "İzin Durumları"
                onValueChange={valuePermitStatu => {
                  this.props.selectPickerChecked(valuePermitStatu.value);
                }} />
              }
              leftIcon={        
              <Image source={SelectImage} style={CommonStyles.inlineImg} />
            }
            /> 
            {this.renderAuth()} 
              <Button
              buttonStyle={[CommonStyles.alignmentStyle, CommonStyles.buttonStyle]}
              onPress={this.getPermitListByFilter.bind(this)}
              text="FİLTRELE" />
              <Loading loading={this.props.filterLoading} />
              <DropdownAlert ref={ref => DropDownAlertServices.setDropDownAlert(ref)} />            
                </Content>           
            </Container>
        );
    }
}
const mapStateToProps = ({ addTabResponse,listTabResponse }) => {
    const {
        isDtpVisibleEndTime,
        isDtpVisibleStartTime,
        isSelectedStartTime,
        isSelectedEndTime,
        startTime,
        endTime,
        stateName,      
        isLoading,
        loadPermitList,
        pickerValue      
      } = addTabResponse;

      const {permitList,filterLoading,personnel,personelId} = listTabResponse;
      return {
        isDtpVisibleEndTime,
        isDtpVisibleStartTime,
        isSelectedStartTime,
        isSelectedEndTime,
        stateName,
        startTime,
        endTime,
        isLoading,
        permitList,
        pickerValue,
        loadPermitList,
        personelId ,
        filterLoading,
        personnel
      };
  };
  
  const actionCreators = {
    clickDatetimePicker, 
    cancelDatetimePicker, 
    setDateTime, 
    selectPickerChecked, 
    takePermit,
    getPermitList,
    selectPersonelPickerChecked,
    getPersonelList
  }
  export default connect(mapStateToProps,actionCreators)(FilterTab);
  