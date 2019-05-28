import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import { AccordionComponent } from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../assets/styles/styles';
import PermitSystemAPI from '../../../services/PermitSystemAPI';
import StorageEnum from '../../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../../common/Enums/PermitTypeEnum';
import LocalStorageService from '../../../services/LocalStorageServices';

export default class RequestPermitTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: [],
        };
    }
    setDataArray(response) {
        var permitList = [];
        response.data.forEach(permit => {
            console.log(permit.PermitType);
            var permitType = permit.PermitType == PermitTypeEnum.YILLIK ? "YILLIK İZİN" : "DOĞUM İZNİ";
            var permitObj = {};
            permitObj.title = permit.PersonelFirstName + " " + permit.PersonelLastName;
            permitObj.content = {
                PermitNo: permit.PermitNo,
                PermitType: permitType,
                StartDate: permit.StartDate,
                EndDate: permit.EndDate,
                Reason: permit.Reason,
                ReqeuestDate: permit.ReqeuestDate,
                Status: permit.Status
            };
            permitList.push(permitObj);
        });
        this.setState({ dataArray: permitList });
    }
    componentWillMount() {
        LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
            PermitSystemAPI.getValue("api/Values/GetRequestPermits", response => {
                this.setDataArray(response);
            }, err => {
                //apide catch'e düşünce burdada catch'e düşer id gitmezse mesela apiye catch'e düşer
            });
        });
    }
    static navigationOptions = {
        title: 'İzin Talepleri',
        headerRight: (<View></View>),
        headerStyle: {
            backgroundColor: Colors.lightWhite,
            borderBottomWidth: 1,
            borderColor: Colors.blueberry,
        },
        headerTintColor: Colors.blueberry,
        headerTitleStyle: Styles.textStyle
    };
    render() {
        return (
            <Container style={Styles.container}>
                <Content>
                    <AccordionComponent dataArray={this.state.dataArray} ShowStatusButton={true} />
                </Content>
            </Container>
        );
    }
}

