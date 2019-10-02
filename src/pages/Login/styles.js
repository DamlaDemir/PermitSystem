import { StyleSheet,Dimensions } from "react-native";
import Colors from '../../assets/colors/Colors';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.darkRed,
        borderRadius: 20,
        height: 40,
        width: DEVICE_WIDTH - 40,    
      }, 
       container: {
        flex: 1,
      },
      inlineImg: {
          position: 'absolute',
          zIndex: 99,
          width: 22,
          height: 22,
          left: 35,
          top: 9,
        },
        inputStyle : {
          backgroundColor: 'transparent',
          width: DEVICE_WIDTH - 40,
          height: 40,
          marginHorizontal: 20,
          paddingLeft: 45,
          borderRadius: 20,
          color: '#ffffff',
          borderWidth:1,
          borderColor:'white'
      },
});
module.exports = styles;
