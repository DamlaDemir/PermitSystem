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
    }
});

