import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import UserImage from '../../../images/user.png'
import { Button, CustomInput } from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from "../../../assets/styles/styles"
import { setName, saveProfile } from '../../../actions';

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

    saveProfile() {
        const profileParameters = {
          name:this.props.name,
          
        }
        this.props.saveProfile(profileParameters);
      }

    render() {
        const { inputStyle, button, inlineImg, InlineIcon } = styles;
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
                            icon="ios-contact"
                            secureTextEntry={false}
                            placeholder="İsim : Merve"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.name}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            isIcon={true}
                            InlineIcon={inlineImg}
                            onChangeText={name => this.props.setName(name)}
                        />
                        <CustomInput
                            icon="ios-contact"
                            secureTextEntry={false}
                            placeholder="Soyisim : Yapnaz"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            // autoCorrect={true}
                            // value={this.props.lastname}
                            InlineIcon={inlineImg}
                            inputStyle={[inputStyle,Styles.textStyle]}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={5}
                            isIcon={true}
                        />
                        <CustomInput
                            icon="ios-contact"
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
                            icon="ios-lock"
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
                            secureTextEntry={true} 
                        />
                        <CustomInput
                            icon="ios-call"
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
                            icon="ios-call"
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
                            icon="ios-mail"
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
                            icon="ios-pin"
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
                        <CustomInput
                            icon="md-calendar"
                            secureTextEntry={false}
                            placeholder="İşe Başlama Tarihi : 25.02.2019"
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
                            editable = {false}
                        />
                        <Button
                            buttonStyle={[button, Styles.buttonSize,Styles.alignmentStyle]}
                            onPress={this.saveProfile.bind(this)}
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
    button: {
        backgroundColor: Colors.blueberry,
        margin: 30
      },
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

const mapStateToProps = ({profileTabResponse}) => {
     const { name } = profileTabResponse;
    return {
         name
    };
};
export default connect(mapStateToProps, {setName,saveProfile})(ProfileTab);