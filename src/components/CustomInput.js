import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {View,Image,TextInput,Dimensions} from 'react-native';

class CustomInput extends Component{
    render(){
        console.log(this.props);
        const {inputWrapper}=styles;
        return(
            <View style={inputWrapper}>
                <Image source={this.props.source} style={this.props.inlineImg} />
                <TextInput
                style={this.props.inputStyle}
                placeholder={this.props.placeholder}
                secureTextEntry={this.props.secureTextEntry}
                autoCorrect={this.props.autoCorrect}
                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}
                placeholderTextColor={this.props.placeholderTextColor}
                underlineColorAndroid={this.props.underlineColorAndroid}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                multiline={this.props.multiline}
                numberOfLines={this.props.numberOfLines}
                />
            </View>
        );
    }
}

CustomInput.propTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
  };

const DEVICE_WIDTH = Dimensions.get('window').width;
//const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = {   
    inputWrapper: {
        flex: 1,
        //borderWidth:5
      }

};

export {CustomInput};