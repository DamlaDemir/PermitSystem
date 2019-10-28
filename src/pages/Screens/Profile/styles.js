import { StyleSheet,Dimensions } from "react-native";
import Colors from '../../../assets/colors/Colors';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    signOutButton: {
        height: 20,
        width:65,
        backgroundColor: Colors.darkRed,
        marginRight:10,
        borderRadius:10
      }    
});
module.exports = styles;
