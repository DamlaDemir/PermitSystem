import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import moment from 'moment';
import {Agenda,LocaleConfig} from 'react-native-calendars';
// import {LocaleConfig} from 'react-native-calendars';
import Colors from '../../assets/colors/Colors';
import Styles from '../../assets/styles/CommonStyles';
import PermitStatusEnum from '../../common/Enums/PermitStatusEnum';


LocaleConfig.locales['tr'] = {
  monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
  monthNamesShort: ['Oc.','Şub.','Mar.','Nis.','May.','Haz.','Tem.','Ağus.','Eyl.','Eki.','Kas.','Ara.'],
  dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
  dayNamesShort: ['Pz.','Pzt.','Sl.','Çrş.','Prş.','Cm.','Cts.'],
  today: 'Bugün'
};
LocaleConfig.defaultLocale = 'tr';

 class CustomCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        permitList: [],      
        items: {},
        marked : null
    };
  }
  // getDateString(timestamp) {
  //   const date = new Date(timestamp)
  //   const year = date.getFullYear()
  //   const month = date.getMonth() + 1
  //   const day = date.getDate()

  //   let dateString = year + "-";
  //   if (month < 10) {
  //     dateString += '0' + month + "-"
  //   } else {
  //     dateString += month + "-"
  //   }
  //   if (day < 10) {
  //     dateString += '0' + day 
  //   } else {
  //     dateString += day
  //   }

  //   return dateString
  // }


  render() {
    //her tarih seçtiğimde render tekrar çalıştırılıyor
    return (
      <Agenda style = {styles.calendar}
        items={this.props.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected = {'2019-08-05'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        markingType={'period'}
        markedDates={this.props.markedDates}
        theme = {this.props.theme}
        // monthFormat={'yyyy'} // takvimin başlığını sadece yıl olarak gösterir Mayıs 2019 değil sadece 2019 mesela
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    //bu döngünün amacı tarihlerin üstüne basınca altta kutucuk çıkarıp bilgi vermek
    //gelen day yukardan gelen selected date örneğin 2019-05-16
    //aşağıdaki döngü gelen date değerine göre o ayın başından başlıyor (2019-05-01)
    //2019-08-08 e kadar her gün rastgele sayıda item atıyor yani biz bu tarihler aralığında bir tarihi seçip üstüne basınca
    //aşağıda for içinde yazdırdığımız item forla başlayan içeriği görüyoruz.
      for (let i = -30; i < 85; i++) { 
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.props.items[strTime]) {
          let permitList = this.props.permitList.filter(x => {
            return (
            moment(x.StartDate).format('YYYY-MM-DD') == strTime
            );
          });   
          // const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < permitList.length; j++) {
            var startDate = new Date(permitList[j].StartDate);
            var endDate =new Date(permitList[j].EndDate);
            var StartTimestamp = startDate.getTime();
            var EndTimestamp = endDate.getTime();

            while (StartTimestamp < EndTimestamp) {
              strTime = this.timeToString(StartTimestamp);
              this.props.items[strTime] = [];
              this.props.items[strTime].push({
                StartDate:moment(permitList[j].StartDate).format('DD.MM.YYYY HH:mm'),
                EndDate: moment(permitList[j].EndDate).format('DD.MM.YYYY HH:mm'),
                Reason: permitList[j].Reason,
                Status : permitList[j].Status,
              });
              StartTimestamp += 24 * 60 * 60 * 1000;
            }         
          }
        }
      }   
  }

  renderItem(item) {
    //loadItems da günlere items doldurduktan sonra hemen bu fonksiyon çalışıyor hergünün altındaki itemler için tek tek renderItema düşüyor(sadece dolu olan tarihler için düşüyor)
    return (
        <View style={[styles.item]}>
          <View><Text style={[Styles.textStyle,{ fontSize: 12 }]}>Başlangıç Tarihi: {item.StartDate}</Text></View>
          <View><Text style={[Styles.textStyle,{ fontSize: 12 }]}>Bitiş Tarihi: {item.EndDate}</Text></View>
          <View><Text style={[Styles.textStyle,{ fontSize: 12 }]}>Açıklama: {item.Reason}</Text></View>
          <View><Text style={[Styles.textStyle,{ fontSize: 12 }]}>Durum:</Text>
          <Text style={[Styles.textStyle, { borderRadius: 5, width: 120, fontSize: 14 }, item.Status == PermitStatusEnum.ONAYLANDI ? Styles.approval : item.Status == PermitStatusEnum.ONAYBEKLIYOR ? Styles.waitApproval : Styles.reject]}>
            {item.Status == PermitStatusEnum.ONAYLANDI ? "Onaylandı" : item.Status == PermitStatusEnum.ONAYBEKLIYOR ? "Onay Bekliyor" : "Onaylanmadı"}
          </Text>
          </View>

        </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {

    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

export {CustomCalendar};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 600
  },
});

