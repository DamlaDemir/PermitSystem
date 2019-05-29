import React, { Component } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { saveProfile, setLastName, setName, setUserName, setPassword, setGsm1, setGsm2, setEmail, setAddress, setStartdate } from '../../../actions';
import Colors from '../../../assets/colors/Colors';
import Styles from "../../../assets/styles/styles";
import StorageEnum from '../../../common/Enums/StorageEnum';
import { Button, CustomInput } from '../../../components';
import UserImage from '../../../images/user.png';
import LocalStorageService from '../../../services/LocalStorageServices';
import PermitSystemAPI from '../../../services/PermitSystemAPI';


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
            name: this.props.name,

        }
        this.props.saveProfile(profileParameters);
    }

    componentWillMount() {
        LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
            let ProfileRequest = { personelId: user.value.Id };
            PermitSystemAPI.postValue("api/Values/GetProfile", ProfileRequest, response => {
                debugger;
                this.setProfileDatas(response.data);

            }, err => {
                //apide catch'e düşünce burdada catch'e düşer id gitmezse mesela apiye catch'e düşer
            });
        });
    }

    setProfileDatas(data) {       
        this.props.setName("İsim: " + data.Firstname);
        this.props.setLastName("Soyisim: " + data.Lastname);
        this.props.setUserName("Kullanıcı Adı: " + data.Username);
        this.props.setPassword(data.Password);
        this.props.setGsm1("Gsm1: " + data.Phone);
        if (data.gsm2 == null ) { this.props.setGsm2("Gsm2: " + ""); }
        else{ this.props.setGsm2("Gsm2: " + data.Phone2); }
        this.props.setEmail("Eposta: " + data.Email);
        debugger;
        this.props.setAddress("Adress: " + data.Address);
        this.props.setStartdate("İşe Başlama Tarihi: " + moment(data.Startdate).format('DD.MM.YYYY'));
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
                        <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center' }}>
                            <CustomInput
                                icon="ios-contact"
                                secureTextEntry={false}
                                placeholder="İsim"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.name}
                                inputStyle={[inputStyle, Styles.textStyle]}
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
                                placeholder="Soyisim"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.lastname}
                                InlineIcon={inlineImg}
                                inputStyle={[inputStyle, Styles.textStyle]}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={5}
                                isIcon={true}
                                onChangeText={lastname => this.props.setLastName(lastname)}
                            />
                            <CustomInput
                                icon="ios-contact"
                                secureTextEntry={false}
                                placeholder="Kullanıcı Adı"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.username}
                                InlineIcon={inlineImg}
                                inputStyle={[inputStyle, Styles.textStyle]}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={5}
                                isIcon={true}
                                onChangeText={username => this.props.setUserName(username)}
                            />
                            <CustomInput
                                icon="ios-lock"
                                secureTextEntry={false}
                                placeholder="Parola"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.password}
                                InlineIcon={inlineImg}
                                inputStyle={[inputStyle, Styles.textStyle]}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={5}
                                isIcon={true}
                                secureTextEntry={true}
                                onChangeText={password => this.props.setPassword(password)}
                            />
                            <CustomInput
                                icon="ios-call"
                                secureTextEntry={false}
                                placeholder="Gsm"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.gsm1}
                                InlineIcon={inlineImg}
                                inputStyle={[inputStyle, Styles.textStyle]}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={5}
                                keyboardType={'phone-pad'}
                                isIcon={true}
                                onChangeText={gsm1 => this.props.setGsm1(gsm1)}
                            />
                            <CustomInput
                                icon="ios-call"
                                secureTextEntry={false}
                                placeholder="Gsm"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.gsm2}
                                InlineIcon={inlineImg}
                                inputStyle={[inputStyle, Styles.textStyle]}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={5}
                                keyboardType={'phone-pad'}
                                isIcon={true}
                                onChangeText={gsm2 => this.props.setGsm2(gsm2)}
                            />
                            <CustomInput
                                icon="ios-mail"
                                secureTextEntry={false}
                                placeholder="Eposta"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.email}
                                InlineIcon={inlineImg}
                                inputStyle={[inputStyle, Styles.textStyle]}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={5}
                                keyboardType={'email-address'}
                                isIcon={true}
                                onChangeText={email => this.props.setEmail(email)}
                            />
                            <CustomInput
                                icon="ios-pin"
                                secureTextEntry={false}
                                placeholder="Adres"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.address}
                                InlineIcon={inlineImg}
                                inputStyle={[inputStyle, Styles.textStyle]}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={5}
                                isIcon={true}
                                onChangeText={address => this.props.setAddress(address)}
                            />
                             <CustomInput
                                icon="md-calendar"
                                secureTextEntry={false}
                                placeholder="İşe Başlama Tarihi"
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                value={this.props.startdate}
                                InlineIcon={inlineImg}
                                inputStyle={[inputStyle, Styles.textStyle]}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={5}
                                isIcon={true}
                                editable={false}
                                onChangeText={startdate => this.props.setStartdate(startdate)}
                            /> 
                            <Button
                                buttonStyle={[button, Styles.buttonSize, Styles.alignmentStyle]}
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

const mapStateToProps = ({ profileTabResponse }) => {
    const { name,
        lastname,
        username,
        password,
        gsm1,
        gsm2,
        email,
        address,
        startdate } = profileTabResponse;
    return {
        name,
        lastname,
        username,
        password,
        gsm1,
        gsm2,
        email,
        address,
        startdate
    };
};
export default connect(mapStateToProps, { setName, setLastName, saveProfile, setUserName, setPassword, setGsm1, setGsm2, setEmail, setAddress, setStartdate })(ProfileTab);