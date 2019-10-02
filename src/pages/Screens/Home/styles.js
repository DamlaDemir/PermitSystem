import { StyleSheet,Dimensions } from "react-native";
import Colors from '../../../assets/colors/Colors';

const styles = StyleSheet.create({
    gauge: {
        position: 'absolute',
        width: 140,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      },
      gaugeText: {
        color: Colors.blueberry,
        fontSize: 45,
      },
      cardItemStyle: {
        borderRightWidth: 4,
        borderRightColor: Colors.darkRed
      },
      iconStyle: {
        color: Colors.blueberry
      }
});
module.exports = styles;
