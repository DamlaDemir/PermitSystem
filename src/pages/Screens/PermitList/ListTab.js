import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import { connect } from 'react-redux';
import { AccordionComponent } from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../assets/styles/CommonStyles';
import PermitSystemAPI from '../../../services/PermitSystemAPI';
import LocalStorageService from '../../../services/LocalStorageServices';
import StorageEnum from '../../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../../common/Enums/PermitTypeEnum';
import { takePermit } from '../../../redux/actions';

class ListTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: [],
        };
    }
    setDataArray(response,user) {
        var permitList = [];
        response.data.forEach(permit => {
            console.log(permit.PermitType);
            var permitType = permit.PermitType == PermitTypeEnum.YILLIK ? "YILLIK İZİN" : "DOĞUM İZNİ";
            var permitObj = {};
            permitObj.title = user.value.IsAdmin ? permit.PersonelFirstName + " " + permit.PersonelLastName : permitType;
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

    getPermitList(){
        LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
            if (user.value.IsAdmin) {
                PermitSystemAPI.getValue("api/Values/GetAllPermits", response => {
                    this.setDataArray(response,user);
                }, err => {
                    //apide catch'e düşünce burdada catch'e düşer id gitmezse mesela apiye catch'e düşer
                });

            } else {
                let permitRequest = { personelId: user.value.Id };
                PermitSystemAPI.postValue("api/Values/GetUserPermits", permitRequest, response => {
                this.setDataArray(response,user);
                }, err => {
                    //apide catch'e düşünce burdada catch'e düşer id gitmezse mesela apiye catch'e düşer
                });
            }
        });
    }
   
    static navigationOptions = {
        title: 'İzin Listesi',
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
        if(this.props.loadPermitList){
            this.getPermitList();
        }
        return (
            <Container style={Styles.container}>
                <Content>
                    <AccordionComponent dataArray={this.state.dataArray} ShowStatusButton={false}/>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = ({ addTabResponse }) => {
    const {loadPermitList} = addTabResponse;
    return {
        loadPermitList
    };
  };
  
  export default connect(mapStateToProps, {takePermit })(ListTab);
  