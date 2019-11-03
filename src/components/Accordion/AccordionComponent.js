import React, { Component } from "react";
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import moment from 'moment';
import permitImage from '../../assets/images/permit.png';
import Colors from '../../assets/colors/Colors';
import Styles from '../../assets/styles/CommonStyles';
import PermitStatusEnum from '../../common/Enums/PermitStatusEnum';
import PermitTypeEnum from '../../common/Enums/PermitTypeEnum';
import styles from './styles';

class AccordionComponent extends Component {
  constructor(props) {
    super(props);

}
  _renderHeader = (item, expanded) => {
    return (
      <View style={styles.headerStyle}>
        <View style={[
          styles.imageView, 
          { backgroundColor: item.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }, 
          Styles.alignmentStyle
        ]}>
          <Image source={permitImage} style={styles.inlineImg} />
        </View>
        <View style={[
          styles.headerTextView, { borderColor: item.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }, 
          Styles.alignmentStyle
          ]}>
          <Text style={styles.headerTextStyle}>{item.Title}</Text>
          {expanded
            ? <Icon style={[styles.iconStyle, { color: item.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }]} name="remove-circle" />
            : <Icon style={[styles.iconStyle, { color: item.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }]} name="ios-add-circle" />}
            <TouchableOpacity onPress={() => this.props.EditOnPress(item.PermitNo)} >
              <Icon style={[styles.iconStyle, { color: item.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }]} name="create" />
            </TouchableOpacity>

        </View>
      </View>

    );
  }

  renderStatus(item){
    if (this.props.ShowStatusButton) {
      return(
        <View style={styles.statusView}>
        <View style={{flex:0.5}}>           
        <TouchableOpacity style= {[Styles.approval,Styles.alignmentStyle,Styles.statusButton]}><Text style = {Styles.textStyle}>Onayla</Text></TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity style={[Styles.reject,Styles.alignmentStyle,Styles.statusButton]} ><Text style = {Styles.textStyle}>Reddet</Text></TouchableOpacity>
        </View>
        </View>
      );
    }
    else {
      return (
        <View style={styles.statusView}>
          <Text style={[Styles.textStyle, { fontSize: 14, flex: 0.5 }]}>Durum:</Text>
          <Text style={[Styles.textStyle, { borderRadius: 5, width: 120, fontSize: 14 }, item.Status == PermitStatusEnum.ONAYLANDI ? Styles.approval : item.Status == PermitStatusEnum.ONAYBEKLIYOR ? Styles.waitApproval : Styles.reject]}>
            {item.Status == PermitStatusEnum.ONAYLANDI ? "Onaylandı" : item.Status == PermitStatusEnum.ONAYBEKLIYOR ? "Onay Bekliyor" : "Onaylanmadı"}
          </Text>
        </View>
      );
    }
  }
  _renderContent(item,statusView) {
    return (
      <View style={styles.container}>
        <View style={[styles.contentLeftView, { backgroundColor: item.PermitType == PermitTypeEnum.YILLIK  ? Colors.blueberry : Colors.darkRed }, Styles.alignmentStyle]}>
          <Text style={[Styles.textStyle, { color: 'white' }]}>{item.TotalHour}</Text>
        </View>
        <View style={styles.contentRightView}>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>İzin No: {item.PermitNo}</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>İzin Türü: {item.PermitType == PermitTypeEnum.YILLIK ? "Yıllık İzin" : "Doğum İzni" }</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>Başlangıç Tarihi: {moment(item.StartDate).format('DD.MM.YYYY HH:mm')}</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>Bitiş Tarihi: {moment(item.EndDate).format('DD.MM.YYYY HH:mm')}</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>Açıklama: {item.Reason}</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>Talep Tarihi: {moment(item.RequestDate).format('DD.MM.YYYY HH:mm')}</Text>
          {statusView}
          </View>
        </View>
    );
  }
  render() {
    return (
      <Accordion
        dataArray={this.props.dataArray}
        animation={true}
        expanded={true}
        renderHeader={this._renderHeader}
        renderContent={item => this._renderContent(item,this.renderStatus(item))}
      />
    );
  }
}

export { AccordionComponent };