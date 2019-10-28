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
  _renderHeader(item, expanded) {
    return (
      <View style={styles.headerStyle}>
        <View style={[
          styles.imageView, 
          { backgroundColor: item.content.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }, 
          Styles.alignmentStyle
        ]}>
          <Image source={permitImage} style={styles.inlineImg} />
        </View>
        <View style={[
          styles.headerTextView, { borderColor: item.content.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }, 
          Styles.alignmentStyle
          ]}>
          <Text style={styles.headerTextStyle}>{" "}{item.title} | {moment(item.content.StartDate).format('DD.MM.YYYY')} - {moment(item.content.EndDate).format('DD.MM.YYYY')}</Text>
          {/* <Text style={styles.headerTextStyle}>{" "}{item.title}</Text> */}

          {expanded
            ? <Icon style={[styles.iconStyle, { color: item.content.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }]} name="remove-circle" />
            : <Icon style={[styles.iconStyle, { color: item.content.PermitType == PermitTypeEnum.YILLIK ? Colors.blueberry : Colors.darkRed }]} name="ios-add-circle" />}
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
          <Text style={[Styles.textStyle, { borderRadius: 5, width: 120, fontSize: 14 }, item.content.Status == PermitStatusEnum.ONAYLANDI ? Styles.approval : item.content.Status == PermitStatusEnum.ONAYBEKLIYOR ? Styles.waitApproval : Styles.reject]}>
            {item.content.Status == PermitStatusEnum.ONAYLANDI ? "Onaylandı" : item.content.Status == PermitStatusEnum.ONAYBEKLIYOR ? "Onay Bekliyor" : "Onaylanmadı"}
          </Text>
        </View>
      );
    }
  }
  _renderContent(item,statusView) {
    return (
      <View style={styles.container}>
        <View style={[styles.contentLeftView, { backgroundColor: item.content.PermitType == PermitTypeEnum.YILLIK  ? Colors.blueberry : Colors.darkRed }, Styles.alignmentStyle]}>
          <Text style={[Styles.textStyle, { color: 'white' }]}>5 Saat</Text>
        </View>
        <View style={styles.contentRightView}>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>İzin No: {item.content.PermitNo}</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>İzin Türü: {item.content.PermitType == PermitTypeEnum.YILLIK ? "Yıllık İzin" : "Doğum İzni" }</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>Başlangıç Tarihi: {moment(item.content.StartDate).format('DD.MM.YYYY HH:mm')}</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>Bitiş Tarihi: {moment(item.content.EndDate).format('DD.MM.YYYY HH:mm')}</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>Açıklama: {item.content.Reason}</Text>
          <Text style={[Styles.textStyle, styles.contentRightInnerView]}>Talep Tarihi: {moment(item.content.ReqeuestDate).format('DD.MM.YYYY HH:mm')}</Text>
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
<br />


export { AccordionComponent };