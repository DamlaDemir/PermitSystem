import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import { connect } from 'react-redux';
import moment from 'moment';
import { CustomCalendar } from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../assets/styles/CommonStyles';
import PermitSystemAPI from '../../../services/PermitSystemAPI';
import StorageEnum from '../../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../../common/Enums/PermitTypeEnum';
import LocalStorageService from '../../../services/LocalStorageServices';
import { 
  getUserPermitList, 

} from '../../../redux/actions';


 class CalendarTab extends Component {
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
      debugger;
      this.GetUserPermitList();
      }
    
      GetUserPermitList = () => {
        this.props.getUserPermitList();
      }

    render() {
      if(this.props.loadPermitList){
        this.GetUserPermitList();
      }
        return (
            <Container style={Styles.container}>
                <CustomCalendar 
                markedDates = {this.props.markedList} 
                permitList = {this.props.calendarPermitList}
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

const mapStateToProps = ({ calendarTabResponse, addTabResponse }) => {
  const {
    calendarPermitList,
    calendarLoading,
    markedList
  } = calendarTabResponse;

  const {loadPermitList} = addTabResponse;

    return {
      calendarPermitList,
      calendarLoading,
      markedList,
      loadPermitList
    };
};

const actionCreators = {
  getUserPermitList
}

export default connect(mapStateToProps,actionCreators)(CalendarTab);
