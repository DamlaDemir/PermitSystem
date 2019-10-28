import React, { Component } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, ScrollView, View,TextInput } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    Input,
    Icon,
    Text,
    ListItem,
  } from "react-native-elements";
import { 
    updateProfile, 
    setLastName, 
    setName, 
    setUserName, 
    setPassword, 
    setGsm1, 
    setGsm2, 
    setEmail, 
    setAddress, 
    setStartdate,
    getProfileInfo 
} from '../../../redux/actions';
import Colors from '../../../assets/colors/Colors';
import CommonStyles from "../../../assets/styles/CommonStyles";
import StorageEnum from '../../../common/Enums/StorageEnum';
import { Button, CustomInput, Loading } from '../../../components';
import UserImage from '../../../assets/images/user.png';
import LocalStorageService from '../../../services/LocalStorageServices';
import PermitSystemAPI from '../../../services/PermitSystemAPI';
import styles from './styles';
import NavigationService from '../../../navigation/NavigationServices';
import DropdownAlert from "react-native-dropdownalert";
import DropDownAlertServices from '../../../services/DropdownAlertServices';

class ProfileTab extends Component {
    static navigationOptions  = () => {
        return {
            title: 'PROFİL',
            headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
            headerRight: (<View>
                <Button
                buttonStyle={styles.signOutButton}
                text="Çıkış Yap"
                onPress = {() =>  NavigationService.navigate('Login')}  />
                </View>),
        }
       
        // headerStyle: {
        //     backgroundColor: 'white'
        //     //flex: 1
        // },
        // headerTintColor: '#6B7A8F',
        // headerTitleStyle: {
        //     alignSelf: 'center',
        //     textAlign: "center",
        //     justifyContent: 'center',
        //     fontWeight: 'bold',
        //     textAlignVertical: 'center',
        // },
    };//Steack navigator özelliğinden gelen sayfadaki headerın özellikleri

    saveProfile() {
        debugger;
       let user = {
        Firstname : this.props.name,
        Lastname : this.props.lastname,
        Username : this.props.username,
        Password : this.props.password,
        Phone : this.props.gsm1,
        Phone2 : this.props.gsm2,
        Email : this.props.email,
        Address : this.props.address,
        Startdate : this.props.startdate,
       }
        this.props.updateProfile(user);
    }

    componentDidMount() {
        this.props.getProfileInfo();
    }
    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView>
                    <View>
                        <View style={CommonStyles.alignmentStyle}>
                            <Image
                                style={{
                                    height: 120,
                                    width: 120
                                }}
                                source={UserImage}
                            />
                        </View>
                        <View>
                        <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="İsim"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.name}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            onChangeText={name => this.props.setName(name)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "user",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        /> 

                        <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="Soyisim"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.lastname}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            onChangeText={lastname => this.props.setLastName(lastname)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "user",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        /> 
                         <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="Kullanıcı Adı"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.username}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            onChangeText={username => this.props.setUserName(username)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "user",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        /> 

                        <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="Parola"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.password}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            onChangeText={password => this.props.setPassword(password)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "key",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        /> 
                         <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="Gsm"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.gsm1}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            keyboardType={'phone-pad'}
                            onChangeText={gsm1 => this.props.setGsm1(gsm1)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "phone",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        /> 
                       <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="Gsm2"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.gsm2}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            keyboardType={'phone-pad'}
                            onChangeText={gsm2 => this.props.setGsm2(gsm2)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "phone",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        /> 
                         <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="Eposta"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.email}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            keyboardType={'email-address'}
                            onChangeText={email => this.props.setEmail(email)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "envelope",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        /> 
                          <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="Adres"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={this.props.address}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            onChangeText={address => this.props.setAddress(address)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "map-marker",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        />
                        <ListItem
                        containerStyle={CommonStyles.listContainerStyle}
                        title={
                            <TextInput
                            secureTextEntry={false}
                            placeholder="İşe Başlama Tarihi"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            value={moment(this.props.startdate).format('DD.MM.YYYY')}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                            editable={false}
                            onChangeText={startdate => this.props.setStartdate(startdate)}
                            style = {[CommonStyles.textStyle,{padding:0}]}
                        />              
                        }
                        leftIcon={{
                            size: 20,
                            name: "calendar",
                            type: "font-awesome",
                            color: Colors.darkRed
                          }}          
                        />                               
                            <Button
                                buttonStyle={[CommonStyles.buttonStyle, CommonStyles.alignmentStyle]}
                                onPress={this.saveProfile.bind(this)}
                                text="KAYDET" />
                            <Loading loading={this.props.profileLoading} />
                            <DropdownAlert ref={ref => DropDownAlertServices.setDropDownAlert(ref)} />   
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = ({ profileTabResponse }) => {
    const { 
        name,
        lastname,
        username,
        password,
        gsm1,
        gsm2,
        email,
        address,
        startdate,
        profileLoading } = profileTabResponse;
    return {
        name,
        lastname,
        username,
        password,
        gsm1,
        gsm2,
        email,
        address,
        startdate,
        profileLoading
    };
};

const actionCreators = {
    setName, 
    setLastName, 
    updateProfile, 
    setUserName, 
    setPassword, 
    setGsm1, 
    setGsm2, 
    setEmail, 
    setAddress, 
    setStartdate,
    getProfileInfo
  }
export default connect(mapStateToProps, actionCreators)(ProfileTab);