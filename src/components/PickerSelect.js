import React from 'react';
import {View, StyleSheet, Text,Image } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';
import Colors from '../assets/colors/Colors';
import SelectImage from '../images/check.png';
import Styles from '../assets/styles/styles';

class PickerSelect extends React.Component {

  render() {
    const options = [
      {
        label: 'Yıllık İzin',
        value: 1
      },
    ]
    return (
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
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={Styles.container}>
        <Image source={SelectImage} style={Styles.inlineImg} />
        <View style={Styles.inputStyle}>
          {!selectedItem && <Text style={[Styles.textStyle,]}>{defaultText}</Text>}
          {selectedItem && (
          <Text style={Styles.textStyle}>
                {getLabel(selectedItem)}
          </Text>
          )}
      </View>
      </View>
    )
  }

  renderOption(settings) {
    const { item, getLabel } = settings;
    return (
      <View style={styles.optionContainer}>
          <Text style={[Styles.textStyle]}>{getLabel(item)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor:Colors.blueberry,
    borderRadius:5
  },
  optionContainer: {
    padding: 10,
  }
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