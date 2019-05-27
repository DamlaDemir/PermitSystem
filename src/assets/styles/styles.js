import {StyleSheet } from 'react-native';
import Colors from '../colors/Colors';
import { Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    
    textStyle: {
        color:'black',
        fontWeight:"100",
        fontSize:16,
        fontFamily: "Montserrat-Light",
        backgroundColor:"transparent"
    },
    alignmentStyle: {
        justifyContent:'center',
        alignItems:'center'
    },
    inputStyle: {
        backgroundColor: 'transparent',
        width: DEVICE_WIDTH - 40,
        marginTop: 30,
        marginLeft: 15,
        paddingLeft: 40,
        borderRadius: 5,
        borderBottomWidth: 1.25,
        borderColor: Colors.blueberry,  
        height:33 
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 200,
        width: 22,
        height: 22,
        left: 20,
        top: 30,
      },
    container: {
         flex:1,
         backgroundColor:Colors.lightWhite
     },
     buttonSize: {
        height: 40,
        width: DEVICE_WIDTH - 40,
     },

    //  showToastError : {
    //     backgroundColor : Colors.white
    //      },
     
    reject: {
        backgroundColor:Colors.darkRed
    },
    approval : {
        backgroundColor:Colors.inspinia_green
    },
    waitApproval : {
        backgroundColor:Colors.inspinia_orange
    }

});

