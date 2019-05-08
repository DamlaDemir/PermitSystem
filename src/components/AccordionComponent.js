import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import permitImage from '../images/permit.png';
import {Image} from 'react-native';
import Colors from '../assets/colors/Colors';

class AccordionComponent extends Component {
 
  _renderHeader(item, expanded) {
    const {headerStyle,iconStyle,inlineImg,imageView,headerTextStyle,headerTextView}=styles;
    return (
      <View style={headerStyle}>
      <View style={[imageView,{backgroundColor:item.title == "YILLIK İZİN" ? "#6b7a8f" :"#a9b7c0"}]}><Image source={permitImage} style={inlineImg}/></View>

      <View style={[headerTextView,{borderColor:item.title == "YILLIK İZİN" ? "#6b7a8f" :"#dcc7aa"}]}>
      <Text style={headerTextStyle}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={[iconStyle,{color:item.title == "YILLIK İZİN" ? "#6b7a8f" :"#dcc7aa"}] } name="remove-circle" /> 
          : <Icon style={[iconStyle,{color:item.title == "YILLIK İZİN" ? "#6b7a8f" :"#dcc7aa"}]} name="ios-add-circle" />}
      </View>

      </View>

    );
  }
  _renderContent(item) {
    const {container,contentLeftView,contentLeftInnerView,contentLeftText,contentRightView,contentRightInnerView,contentRightText}=styles;
    return (
      <View style={container}>
        <View style={[contentLeftView,{backgroundColor:item.title == "YILLIK İZİN" ? "#6b7a8f" :"#dcc7aa"}]}>
          <View style={contentLeftInnerView}>
            <Text style={contentLeftText}>5 Saat</Text>
          </View>    
        </View>

        <View style={contentRightView}>
        <View style={contentRightInnerView}><Text style={contentRightText}>İzin No: 23453</Text></View>
        <View style={contentRightInnerView}><Text style={contentRightText}>İzin Türü: Yıllık İzin</Text></View>
        <View style={contentRightInnerView}><Text style={contentRightText}>Başlangıç Tarihi:03.05.2019 12:30</Text></View>
        <View style={contentRightInnerView}><Text style={contentRightText}>Bitiş Tarihi:04.05.2019 13:30</Text></View>
        <View style={contentRightInnerView}><Text style={contentRightText}>Açıklama: Yıllık İzin Açıklaması</Text></View>
        <View style={contentRightInnerView}><Text style={contentRightText}>Talep Tarihi: 04.05.2019 13:30</Text></View>
        <View style={{flex:1,paddingLeft:5,margin:5,flexDirection:'row'}}>
        <View style={{flex:0.5}}><Text style={{color:'black', fontWeight:"100", fontSize:14,fontFamily: "Montserrat-Light"}}>Durum:</Text></View>
        <View style={{flex:1.5}}><Text style={{color:'black', fontWeight:"100",fontSize:14,fontFamily: "Montserrat-Light",borderRadius:5,backgroundColor:Colors.inspinia_orange,width:120}}>Onay Bekleniyor</Text></View>
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
    justifyContent:'center', 
    alignItems:'center',
    borderColor:"white",
    borderBottomWidth:1
  },
  headerTextView: {
    flex:2,
    flexDirection:'row', 
    backgroundColor:"#F8FAFF",
    justifyContent:'center', 
    alignItems:'center',
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
  contentLeftInnerView: {
    flex:1,
    paddingLeft:5,
    margin:5,
    justifyContent:'center',
    alignItems:'center'
  },
  contentLeftViewText: {
    color:'white', 
    fontWeight:"100", 
    fontSize:16,
    fontFamily: "Montserrat-Light"
  },
  contentLeftText: {
    color:'white', 
    fontWeight:"100", 
    fontSize:16,
    fontFamily: "Montserrat-Light"
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
  contentRightText: {
    color:'black',
     fontWeight:"100",
     fontSize:14,
     fontFamily: "Montserrat-Light"
  }
  

}

export {AccordionComponent};