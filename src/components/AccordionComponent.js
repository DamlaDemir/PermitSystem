import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import permitImage from '../images/permit.png';
import {Image} from 'react-native';
import Colors from '../assets/colors/Colors';
import Styles from '../assets/styles/styles';
import moment from 'moment';
import PermitStatusEnum from '../common/Enums/PermitStatusEnum';

class AccordionComponent extends Component {
 
  _renderHeader(item, expanded) {
    const {headerStyle,iconStyle,inlineImg,imageView,headerTextStyle,headerTextView}=styles;
    return (
      <View style={headerStyle}>
      <View style={[imageView,{backgroundColor:item.title == "YILLIK İZİN" ? Colors.blueberry :Colors.darkRed},Styles.alignmentStyle]}>
        <Image source={permitImage} style={inlineImg}/>
      </View>
      <View style={[headerTextView,{borderColor:item.title == "YILLIK İZİN" ? Colors.blueberry :Colors.darkRed},Styles.alignmentStyle]}>
      <Text style={headerTextStyle}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={[iconStyle,{color:item.title == "YILLIK İZİN" ? Colors.blueberry :Colors.darkRed}] } name="remove-circle" /> 
          : <Icon style={[iconStyle,{color:item.title == "YILLIK İZİN" ? Colors.blueberry :Colors.darkRed}]} name="ios-add-circle" />}
      </View>

      </View>

    );
  }
  _renderContent(item) {
    const {container,contentLeftView,contentRightView,contentRightInnerView}=styles;
    return (
      <View style={container}>
        <View style={[contentLeftView,{backgroundColor:item.title == "YILLIK İZİN" ? Colors.blueberry  :Colors.darkRed},Styles.alignmentStyle]}>
            <Text style={[Styles.textStyle,{color:'white'}]}>5 Saat</Text>
        </View> 
        <View style={contentRightView}> 
          <Text style={[Styles.textStyle,{fontSize:14},contentRightInnerView]}>İzin No: {item.content.PermitNo}</Text>
          <Text style={[Styles.textStyle,{fontSize:14},contentRightInnerView]}>İzin Türü: {item.content.PermitType}</Text>
          <Text style={[Styles.textStyle,{fontSize:14},contentRightInnerView]}>Başlangıç Tarihi: {moment(item.content.StartDate).format('DD.MM.YYYY HH:mm')}</Text>
          <Text style={[Styles.textStyle,{fontSize:14},contentRightInnerView]}>Bitiş Tarihi: {moment(item.content.EndDate).format('DD.MM.YYYY HH:mm')}</Text>
          <Text style={[Styles.textStyle,{fontSize:14},contentRightInnerView]}>Açıklama: {item.content.Reason}</Text>
          <Text style={[Styles.textStyle,{fontSize:14},contentRightInnerView]}>Talep Tarihi: {moment(item.content.ReqeuestDate).format('DD.MM.YYYY HH:mm')}</Text>
          <View style={{flex:1,paddingLeft:5,margin:5,flexDirection:'row'}}>
            <Text style={[Styles.textStyle,{fontSize:14,flex:0.5}]}>Durum:</Text>
            <Text style={[Styles.textStyle,{borderRadius:5,width:120,fontSize:14},item.content.Status == PermitStatusEnum.ONAYLANDI ? Styles.approval : item.content.Status == PermitStatusEnum.ONAYBEKLIYOR ? Styles.waitApproval : Styles.reject]}>
            {item.content.Status == PermitStatusEnum.ONAYLANDI ? "Onaylandı" : item.content.Status == PermitStatusEnum.ONAYBEKLIYOR ? "Onay Bekliyor" : "Onaylanmadı"}
            </Text>
          </View>
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
            renderContent={this._renderContent}
          />
    );
  }
}
<br/>

const styles = {
  headerStyle:{
    marginTop:8,
    marginLeft:5,
    marginRight:5,
    flex:1,
    flexDirection:'row',
    height:40
  },
  iconStyle: {
    fontSize: 18 , 
    flex:0.5
  }, 
  container: {
    flex:1,
    flexDirection: 'row',
    borderColor:'black',
    marginLeft:5,
    marginRight:5,
  },
  inlineImg: {
    position: 'absolute',
    height:30,
    width:30,
  },
  imageView: {
    flex:0.5,
    borderColor:"white",
    borderBottomWidth:1
  },
  headerTextView: {
    flex:2,
    flexDirection:'row', 
    backgroundColor:"#F8FAFF",
    borderBottomWidth:1,
    paddingLeft:7
  },
  headerTextStyle : {
    flex:3, 
    fontWeight: "300",
    fontFamily: "Montserrat-Light", 
    color:'black',
    justifyContent:'center'
  },
  contentLeftView: {
    flex:0.5,
    borderRightWidth:1,
    borderColor:"white"
  },
  contentRightView: {
    flex:2,
    paddingLeft:5,
    backgroundColor:"#F8FAFF"
  },
  contentRightInnerView: {
    flex:1,
    paddingLeft:5,
    margin:5
  },  

}

export {AccordionComponent};