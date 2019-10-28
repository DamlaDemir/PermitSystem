import React, { Component } from 'react';
import { View, ScrollView,Image } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import { connect } from 'react-redux';
import {ListItem} from "react-native-elements";
import { AccordionComponent,CustomDatePicker,PickerSelect, Button } from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../assets/styles/CommonStyles';
import PermitSystemAPI from '../../../services/PermitSystemAPI';
import LocalStorageService from '../../../services/LocalStorageServices';
import StorageEnum from '../../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../../common/Enums/PermitTypeEnum';
import { clickDatetimePicker, cancelDatetimePicker, setDateTime, selectPickerChecked, takePermit,getPermitList } from '../../../redux/actions';
import BaseComponent from '../../../common/Base';


class ListTab extends BaseComponent {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'İZİN LİSTESİ',
    };

    render() {
        return (
            <Container style={Styles.container}>          
                <Content>
                <ScrollView>
                <AccordionComponent dataArray={this.props.permitList} ShowStatusButton={false}/>
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
  
  export default connect(mapStateToProps, {})(ListTab);
  