import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput, Dimensions } from 'react-native';
import { Icon } from 'native-base';

class CustomInput extends Component {
    render() {
        console.log(this.props);
        let img;
        if (this.props.isIcon == true) {
            img = <Icon active name={this.props.icon} style={this.props.InlineIcon} />
        }
        else {
            img = <Image source={this.props.source} style={this.props.inlineImg} />
        }
        return (
            <View style={styles.container}>
                {img}
                <TextInput
                    editable={this.props.editable}
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
    source: PropTypes.number,
    icon:PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
    editable: PropTypes.bool,
};

const styles ={
    container: {
        flex:1
    }
}
export { CustomInput };