import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Image, Dimensions, ScrollView } from 'react-native';
import UserImage from '../../../images/user.png'
import { Button, CustomInput } from '../../../components';
import Styles from "../../../assets/styles/styles"

class ProfileTab extends Component {
    static navigationOptions = {
        title: 'PROFİL',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerRight: (<View></View>),
        headerStyle: {
            backgroundColor: 'white'
            //flex: 1
        },
        headerTintColor: '#6B7A8F',
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: "center",
            justifyContent: 'center',
            fontWeight: 'bold',
            textAlignVertical: 'center',
        },
    };//Steack navigator özelliğinden gelen sayfadaki headerın özellikleri

    render() {
        const { container, inputStyle, button, inlineImg, InlineIcon } = styles;
        return (
            <KeyboardAvoidingView>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                height: 120,
                                width: 120,
                                borderWidth: 1,
                                borderRadius: 75
                            }}
                            source={UserImage}
                        />
                    </View>
                    <View style={{ flex: 9, alignItems:'center', justifyContent:'center' }}>
                        <CustomInput
                            source="ios-contact"
                            secureTextEntry={false}
                            placeholder="İsim : Merve"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.explanation}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            isIcon={true}
                            InlineIcon={inlineImg}
                        />
                        <CustomInput
                            source="ios-contact"
                            secureTextEntry={false}
                            placeholder="Soyisim : Yapnaz"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.explanation}
                            InlineIcon={inlineImg}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            isIcon={true}
                        />
                        <CustomInput
                            source="ios-contact"
                            secureTextEntry={false}
                            placeholder="Kullanıcı Adı: MYapnaz"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.explanation}
                            InlineIcon={inlineImg}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            isIcon={true}
                        />
                        <CustomInput
                            source="ios-lock"
                            secureTextEntry={false}
                            placeholder="Parola"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.explanation}
                            InlineIcon={inlineImg}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            isIcon={true}
                        />
                        <CustomInput
                            source="ios-call"
                            secureTextEntry={false}
                            placeholder="Gsm: 5546914761"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.explanation}
                            InlineIcon={inlineImg}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            keyboardType={'phone-pad'}
                            isIcon={true}
                        />
                        <CustomInput
                            source="ios-call"
                            secureTextEntry={false}
                            placeholder="Gsm -2: "
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.explanation}
                            InlineIcon={inlineImg}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            keyboardType={'phone-pad'}
                            isIcon={true}
                        />
                        <CustomInput
                            source="ios-mail"
                            secureTextEntry={false}
                            placeholder="Eposta: merveyapnaz@gmail.com"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.explanation}
                            InlineIcon={inlineImg}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            keyboardType={'email-address'}
                            isIcon={true}
                        />
                        <CustomInput
                            source="ios-pin"
                            secureTextEntry={false}
                            placeholder="Adres: CTS"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.explanation}
                            InlineIcon={inlineImg}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            isIcon={true}
                        />
                        <Button
                            buttonStyle={button}
                            isLoading={this.props.isLoading}
                            text="KAYDET" />

                    </View>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = {
    inputStyle: {
        backgroundColor: 'transparent',
        width: DEVICE_WIDTH - 40,
        height: 30,
        marginTop: 20,
        paddingTop: 0,
        paddingLeft: 43,
        borderRadius: 5,
        borderBottomWidth: 1.25,
        borderColor: "#6B7A8F"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6B7A8F",
        height: 40,
        width: DEVICE_WIDTH - 50,
        zIndex: 100,
        margin: 30
    },
    inlineImg: {
        justifyContent: 'flex-start',
        position: 'absolute',
        zIndex: 99,
        width: 28,
        height: 28,
        top: 20,
        color: '#c62828'
    }
}

export default ProfileTab;