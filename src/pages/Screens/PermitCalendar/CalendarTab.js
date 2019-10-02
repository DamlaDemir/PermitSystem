import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import moment from 'moment';
import { CustomCalendar } from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../assets/styles/CommonStyles';
import PermitSystemAPI from '../../../services/PermitSystemAPI';
import StorageEnum from '../../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../../common/Enums/PermitTypeEnum';
import LocalStorageService from '../../../services/LocalStorageServices';

let permitDates = [];

export default class CalendarTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            permitList: [],      
            items: {},
            marked : null
        };
    }  
    static navigationOptions = {
        title: 'İzin Takvimi',
        headerRight: (<View></View>),
        headerStyle: {
            backgroundColor: Colors.lightWhite,
            borderBottomWidth: 1,
            borderColor: Colors.blueberry,
        },
        headerTintColor: Colors.blueberry,
        headerTitleStyle: Styles.textStyle
    };

    componentDidMount( ){
        LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
            let permitRequest = { personelId: user.value.Id };
            PermitSystemAPI.postValue("api/Values/GetUserPermits", permitRequest, response => {
                var permitList = [];     
                response.data.forEach(permit => {
                    var permitObj = {};
                    permitObj = {
                        StartDate: permit.StartDate,
                        EndDate: permit.EndDate,
                        Reason: permit.Reason,
                        ReqeuestDate: permit.ReqeuestDate,
                        Status: permit.Status
                    };
                    permitList.push(permitObj);    
                    this.FillDate(permit.StartDate,permit.EndDate);
                });
                this.setState({ permitList: permitList });
                this.setState({ marked : permitDates});
            }, err => {
            });   
            
        });
      }

      FillDate(startDate,endDate){
        var colors = [Colors.inspinia_blue,Colors.inspinia_green,Colors.inspinia_orange,Colors.inspinia_red,Colors.inspinia_skyblue,
        Colors.blueberry,Colors.darkRed];
        const colorsIndis = Math.floor(Math.random() * 7);
        
        var startDate = new Date(startDate);
        var endDate =new Date(endDate);
        var startDateString = moment(startDate).format('YYYY-MM-DD');
        var endDateString =moment(endDate).format('YYYY-MM-DD');
      
        if( startDateString == endDateString ) 
         Object.assign(permitDates, {[startDateString]: {selected: true,marked: true,startingDay: true,color: colors[colorsIndis] , endingDay : true}});                  
        else{
          Object.assign(permitDates, {[startDateString]: {selected: true,marked: true,startingDay: true,color: colors[colorsIndis] }});   
          var startTimestamp = startDate.getTime();
          startTimestamp += 24 * 60 * 60 * 1000;
          var EndTimestamp = endDate.getTime();
          while (startTimestamp < EndTimestamp) {
            var dateString = this.timeToString(startTimestamp)
            Object.assign(permitDates, {[dateString]: {selected: true,marked: true,color: colors[colorsIndis] }});   
            startTimestamp += 24 * 60 * 60 * 1000;
          }
          Object.assign(permitDates, {[endDateString]: {selected: true,marked: true,color: colors[colorsIndis] , endingDay : true}});                              
        }
       }
       timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
    render() {
        return (
            <Container style={Styles.container}>
                    <CustomCalendar 
                    markedDates = {this.state.marked} 
                    permitList = {this.state.permitList}
                    items = {this.state.items}
                    theme={{
                        calendarBackground: '#fff', //Calendarın arka plan rengini değiştirir
                        textSectionTitleColor: 'gray', //Başlık rengi sunday/monday yazın günlerin rengi
                        dayTextColor: Colors.black, //sayıların reni 1 2 (tarih yani)
                        todayTextColor: Colors.darkRed, // bugünün rengi
                        selectedDayTextColor: Colors.black, //seçili günün rengi (işaretlenmişler)
                        monthTextColor: 'black', //tepede yazan ay yazısının rengi
                        indicatorColor: Colors.lightWhite,
                        selectedDayBackgroundColor: '#333248',
                        arrowColor: Colors.lightWhite,
                        // textDisabledColor: 'red',
                        agendaKnobColor: Colors.blueberry,
                        'stylesheet.calendar.header': {
                          week: {
                            marginTop: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                          }
                        }
                      }}/>
            </Container>
        );
    }
}

