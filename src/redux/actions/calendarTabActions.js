import { 
    CALENDAR_LOADING,
    FILL_CALENDAR_PERMIT_LIST,
    FILL_CALENDAR_MARKED_LIST
 } from './types';
import PermitSystemAPI from '../../services/PermitSystemAPI';
import LocalStorageService from '../../services/LocalStorageServices';
import DropDownAlertServices from '../../services/DropdownAlertServices';
import Base from '../../common/Base/index';
import StorageEnum from '../../common/Enums/StorageEnum';
import PermitTypeEnum from '../../common/Enums/PermitTypeEnum';
import NavigationService from '../../services/NavigationServices';
import Constant from '../../common/constant';
import strings from '../../assets/strings/strings';
import moment from 'moment';
import Colors from '../../assets/colors/Colors';
import Styles from '../../assets/styles/CommonStyles';
import {loadPermitList} from '../actions';

let permitDates = {};

export const calendarLoading = bool => ({
    type: CALENDAR_LOADING,
    payload: bool,
});

export const fillCalendarPermitList = (permitList) => ({
    type: FILL_CALENDAR_PERMIT_LIST,
    payload: permitList,
});

export const fillCalendarMarkedList = (markedList) => ({
    type: FILL_CALENDAR_MARKED_LIST,
    payload: markedList,
});

export const getUserPermitList = () => {
    return (dispatch) => {
        dispatch(loadPermitList(false));
        dispatch(calendarLoading(true));
            LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
                var permitRequest = {
                    UserId :user.value.Id,
                    PermitStatus : -1 // 0 onaylanmadı old için parametre göndermeyince int default 0 yapıyor o yzden -1 veriliyor.
                }        
                PermitSystemAPI.postValue("api/Values/GetPermits",permitRequest, response => {
                    var permitList = [];     
                    response.data.forEach(permit => {
                    var permitObj = {
                        StartDate: permit.StartDate,
                        EndDate: permit.EndDate,
                        Reason: permit.Reason,
                        ReqeuestDate: permit.ReqeuestDate,
                        Status: permit.Status
                    };
                    permitList.push(permitObj);    
                    FillDate(permit.StartDate,permit.EndDate);
                });
                
                dispatch(fillCalendarPermitList(permitList));
                dispatch(fillCalendarMarkedList(permitDates));
                dispatch(calendarLoading(false));
           
                }, err => {
                    dispatch(calendarLoading(false));
                    DropDownAlertServices.alert(
                        Constant.msgType.error,
                        strings.LABEL.HATA,
                        strings.MSG.HATA_OLUSTU,
                        Constant.MESSAGE_DURATION
                      ); 
                });
            });
}
}

const FillDate = (startDate,endDate) => {
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
        var dateString = timeToString(startTimestamp)
        Object.assign(permitDates, {[dateString]: {selected: true,marked: true,color: colors[colorsIndis] }});   
        startTimestamp += 24 * 60 * 60 * 1000;
      }
      Object.assign(permitDates, {[endDateString]: {selected: true,marked: true,color: colors[colorsIndis] , endingDay : true}});                              
    }
   }
  
  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }