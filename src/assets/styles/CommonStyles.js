import {StyleSheet } from 'react-native';
import Colors from '../colors/Colors';
import { Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    
    textStyle: {
        color:'black',
        fontWeight:"100",
        // fontSize:16,
        fontFamily: "Montserrat-Light",
        backgroundColor:"transparent"
    },
    alignmentStyle: {
        justifyContent:'center',
        alignItems:'center'
    },
    inlineImg: { 
        width: 30,
        height: 30,
      },
    container: {
         flex:1,
         backgroundColor:Colors.lightWhite
     },
     buttonStyle: {
        height: 40,
        width: DEVICE_WIDTH - 40,
        backgroundColor: Colors.blueberry,
        margin: 30
     },
     listContainerStyle: {
        borderBottomWidth: 1.25,
        margin:8,
        padding:5,
     },     
    reject: {
        backgroundColor:Colors.darkRed
    },
    approval : {
        backgroundColor:Colors.inspinia_green
    },
    waitApproval : {
        backgroundColor:Colors.inspinia_orange
    },
    statusButton : {
        borderRadius: 20,
        width:80
    }

});

