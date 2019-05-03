import React from 'react';
import {View, StyleSheet, Text,Dimensions,Alert,Image } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';
import Colors from '../assets/colors/Colors';
import SelectImage from '../images/check.png';


class PickerSelect extends React.Component {
  state = {choosenLabel: '', choosenindex: ''}

  render() {
    const options = [
      {
        label: 'One',
        value: 1
      },
      {
        label: 'Two',
        value: 2
      },
      {
        label: 'Three',
        value: 3
      },
      {
        label: 'Four',
        value: 4
      },
      {
        label: 'Five',
        value: 5
      }
    ]
    return (
      <View>
        <CustomPicker
          placeholder={'Lütfen izin türünü seçiniz..'}
          options={options}
          getLabel={item => item.label}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
          //footerTemplate={this.renderFooter}
          onValueChange={this.props.onValueChange}
        />
      </View>
    )
  }
  
  renderHeader() {
    return (
      <View style={styles.headerFooterContainer}>
        <Text>İzin Türleri</Text>
      </View>
    )
  }

  renderField(settings) {
    debugger;
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.inputStyle}>
        <View>
        <Image source={SelectImage} style={styles.inlineImg} />
          {!selectedItem && <Text style={[styles.text, { color: 'black' }]}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <Text style={[styles.text, { color: "black" }]}>
                {getLabel(selectedItem)}
              </Text>
            </View>
          )}
        </View>
      </View>
    )
  }

  renderOption(settings) {
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <Text style={{ color: "black", alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
        </View>
      </View>
    )
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.DarkGreen,
    borderWidth: 1,
    padding: 15
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 14,
    left:35
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
  },
  clearButton: {  borderRadius: 5, marginRight: 10, padding: 5 },
  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  inputStyle : {
    backgroundColor: '#fafafa',
    width: DEVICE_WIDTH - 40,
   // height: 60,
    marginTop: 14,
    marginLeft:15,
    paddingTop:14,
    paddingLeft:5,
    borderRadius: 5,
    //color: '#ffffff',
    borderBottomWidth:1.25,
    borderColor:'#33691e',   
},
  inlineImg: {
  position: 'absolute',
  zIndex: 99,
  width: 22,
  height: 22,
  left: 3,
  bottom:3
},
})

export {PickerSelect};


  /*
  renderFooter(action) {
    return (
      <TouchableOpacity
        style={styles.headerFooterContainer}
        onPress={() => {
          Alert.alert('Footer', "You've click the footer!", [
            {
              text: 'OK'
            },
            {
              text: 'Close Dropdown',
              onPress: action.close.bind(this)
            }
          ])
        }}
      >
        <Text>This is footer, click me!</Text>
      </TouchableOpacity>
    )
  }*/