import React, { Component } from 'react';
import { View, ScrollView,Image } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import { connect } from 'react-redux';
import {ListItem} from "react-native-elements";
import { AccordionComponent} from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../assets/styles/CommonStyles';
import PermitSystemAPI from '../../../services/PermitSystemAPI';
import LocalStorageService from '../../../services/LocalStorageServices';
import StorageEnum from '../../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../../common/Enums/PermitTypeEnum';
import BaseComponent from '../../../common/Base';
import {setDateTime, selectPickerChecked, setExplanation,setPermitNo,setPermitStatus,setRequestDate} from '../../../redux/actions';
import { 
    ADD_PERMIT_DATETIME_SET,
    ADD_PERMIT_TYPE_PICKER_CHECKED
  } from '../../../redux/actions/types';
class ListTab extends BaseComponent {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: "İzin Listesi",
    };

    EditOnPress = (permitNo) => {
        let updatePermit = this.props.permitList.filter(x => x.PermitNo == permitNo);
        let permitType = { value: updatePermit[0].PermitType, label: updatePermit[0].PermitType == PermitTypeEnum.YILLIK ? "Yıllık İzin" : "Doğum İzni" }
        this.props.setDateTime( ADD_PERMIT_DATETIME_SET,'addPermit_startTime', updatePermit[0].StartDate,  'addPermit_isSelectedStartTime','addPermit_isDtpVisibleStartTime');
        this.props.setDateTime( ADD_PERMIT_DATETIME_SET,'addPermit_endTime', updatePermit[0].EndDate,  'addPermit_isSelectedEndTime','addPermit_isDtpVisibleEndTime');
        this.props.selectPickerChecked(ADD_PERMIT_TYPE_PICKER_CHECKED,permitType);
        this.props.setExplanation(updatePermit[0].Reason)
        this.props.setPermitNo(updatePermit[0].PermitNo)
        this.props.setPermitStatus(updatePermit[0].Status)
        this.props.setRequestDate(updatePermit[0].RequestDate)
        console.log(updatePermit);
        this.props.navigation.navigate('AddTab');
    }

    render() {
        return (
            <Container style={Styles.container}>          
                <Content>
                <ScrollView>
                <AccordionComponent dataArray={this.props.permitList} ShowStatusButton={false} EditOnPress={this.EditOnPress}/>       
                </ScrollView>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = ({ listTabResponse }) => {
    const {    
        permitList,
      } = listTabResponse;
      return {
        permitList,
      };
  };

  
  const actionCreators = {
    setDateTime, 
    selectPickerChecked, 
    setExplanation,
    setPermitNo,
    setPermitStatus,
    setRequestDate
  }
  export default connect(mapStateToProps, actionCreators)(ListTab);
  