import React from 'react';
import {View, StyleSheet, Text,Dimensions,Alert,Image } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';
import Colors from '../assets/colors/Colors';
import SelectImage from '../images/check.png';
import Styles from '../assets/styles/styles';

class PickerSelect extends React.Component {
  state = {choosenLabel: '', choosenindex: ''}

  render() {
    const options = [
      {
        label: 'Yıllık İzin',
        value: 1
      },
    ]
    return (
      <View>
        <CustomPicker
          placeholder={'Lütfen izin türünü seçiniz'}
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
        <Text style={Styles.textStyle}>İzin Türleri</Text>
      </View>
    )
  }

  renderField(settings) {
    debugger;
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={[Styles.inputStyle,{height:30,paddingLeft:5}]}>
        <Image source={SelectImage} style={styles.inlineImg} />
          {!selectedItem && <Text style={[Styles.textStyle,{left:35}]}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <Text style={[Styles.textStyle,{left:35}]}>
                {getLabel(selectedItem)}
              </Text>
            </View>
          )}
      </View>
    )
  }

  renderOption(settings) {
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <Text style={[{alignSelf: 'flex-start'},Styles.textStyle]}>{getLabel(item)}</Text>
        </View>
      </View>
    )
  }
}

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
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
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