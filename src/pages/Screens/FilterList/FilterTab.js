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
    getPersonelList
 } from '../../../redux/actions';
import BaseComponent from '../../../common/Base';
import dateImg from '../../../assets/images/datetime.png';
import CommonStyles from '../../../assets/styles/CommonStyles';
import SelectImage from '../../../assets/images/check.png';
import UserImage from '../../../assets/images/User-icon.png';
import { 
  FILTER_PERMIT_DATETIME_CLICK, 
  FILTER_PERMIT_DATETIME_CANCEL, 
  FILTER_PERMIT_DATETIME_SET, 
  FILTER_PERMIT_STATUS_PICKER_CHECKED, 
  FILTER_PERMIT_PERSONEL_PICKER_CHECKED
} from '../../../redux/actions/types';

const options = [
    { label: 'İzin Durumu Seçiniz', value: -1 },
    { label: 'Onaylanmadı', value: 0 },
    { label: 'Onaylandı', value: 1 },
    { label: 'Onay Bekleniyor', value: 2 },
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
    this.props.clickDatetimePicker( FILTER_PERMIT_DATETIME_CLICK,stateName, selectedDtp );
    console.log(this.props.filterPermit_stateName);
    };

  _hideDateTimePicker(selectedDtp) {
    this.props.cancelDatetimePicker(FILTER_PERMIT_DATETIME_CANCEL,selectedDtp);
    }

  _handleDatePicked(datetime, isSelected, selectedDtp) {
    this.props.setDateTime(FILTER_PERMIT_DATETIME_SET, this.props.filterPermit_stateName, datetime.date, isSelected,selectedDtp );
    };
  //datetime picker için

  getPermitListByFilter() {
    var permitRequest = {};
    permitRequest.StartDate = this.props.filterPermit_startTime;
    permitRequest.EndDate = this.props.filterPermit_endTime;
    permitRequest.PermitStatus = this.props.filterPermit_permitStatus;
    permitRequest.UserId = this.props.filterPermit_personelId;
    this.props.getPermitList(permitRequest);
    this.props.navigation.navigate("ListTab");
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
                    this.props.selectPickerChecked(FILTER_PERMIT_PERSONEL_PICKER_CHECKED,value.value);
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
      if(this.props.permitList.length > 0 && this.props.loadPermitList){ //Yeni izin eklendiğinde listenin yenilenmesi için
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
                    onPress={() => this._showDateTimePicker('filterPermit_startTime', 'filterPermit_isDtpVisibleStartTime')}
                    isVisible={this.props.filterPermit_isDtpVisibleStartTime}
                    onConfirm={date => this._handleDatePicked({ date }, 'filterPermit_isSelectedStartTime', 'filterPermit_isDtpVisibleStartTime')}
                    onCancel={() => this._hideDateTimePicker('filterPermit_isDtpVisibleStartTime')}
                    isSelected={this.props.filterPermit_isSelectedStartTime}
                    datetime={this.props.filterPermit_startTime}
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
                onPress={() => this._showDateTimePicker('filterPermit_endTime', 'filterPermit_isDtpVisibleEndTime')}
                isVisible={this.props.filterPermit_isDtpVisibleEndTime}
                onConfirm={date => this._handleDatePicked({ date }, 'filterPermit_isSelectedEndTime', 'filterPermit_isDtpVisibleEndTime')}
                onCancel={() => this._hideDateTimePicker('filterPermit_isDtpVisibleEndTime')}
                isSelected={this.props.filterPermit_isSelectedEndTime}
                datetime={this.props.filterPermit_endTime}
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
                  this.props.selectPickerChecked(FILTER_PERMIT_STATUS_PICKER_CHECKED,valuePermitStatu.value);
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
    const {loadPermitList} = addTabResponse;

      const {
        permitList,
        filterLoading,
        personnel,
        filterPermit_isDtpVisibleStartTime,
        filterPermit_isDtpVisibleEndTime,
        filterPermit_isSelectedStartTime,
        filterPermit_isSelectedEndTime,
        filterPermit_stateName,
        filterPermit_startTime,
        filterPermit_endTime,
        filterPermit_permitStatus,
        filterPermit_personelId
      } = listTabResponse;
      return {
        filterPermit_isDtpVisibleEndTime,
        filterPermit_isDtpVisibleStartTime,
        filterPermit_isSelectedStartTime,
        filterPermit_isSelectedEndTime,
        filterPermit_stateName,
        filterPermit_startTime,
        filterPermit_endTime,
        permitList,
        filterPermit_permitStatus,
        loadPermitList,
        filterPermit_personelId ,
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
    getPersonelList
  }
  export default connect(mapStateToProps,actionCreators)(FilterTab);
  