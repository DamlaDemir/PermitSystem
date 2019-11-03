import { StyleSheet,Dimensions } from "react-native";
import Colors from '../../assets/colors/Colors';


const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 8,
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
        flexDirection: 'row',
        height: 40
      },
      iconStyle: {
        fontSize: 18,
        flex: 0.5
      },
      container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        marginLeft: 5,
        marginRight: 5,
      },
      inlineImg: {
        position: 'absolute',
        height: 30,
        width: 30,
      },
      imageView: {
        flex: 0.5,
        borderColor: "white",
        borderBottomWidth: 1
      },
      headerTextView: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: "#F8FAFF",
        borderBottomWidth: 1,
        paddingLeft: 7,
        paddingRight:15
      },
      headerTextStyle: {
        flex: 3,
        fontWeight: "300",
        fontFamily: "Montserrat-Light",
        color: 'black',
        justifyContent: 'center',
        fontSize : 14
      },
      contentLeftView: {
        flex: 0.5,
        borderRightWidth: 1,
        borderColor: "white"
      },
      contentRightView: {
        flex: 2,
        paddingLeft: 5,
        backgroundColor: "#F8FAFF"
      },
      contentRightInnerView: {
        flex: 1,
        paddingLeft: 5,
        margin: 5,
        fontSize: 14
      },
      statusView : {
        flex: 1, 
        paddingLeft: 5, 
        margin: 5, 
        flexDirection: 'row'
      }
});
module.exports = styles;
