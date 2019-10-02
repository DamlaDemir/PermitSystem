import React,{Component} from 'react';
import {KeyboardAvoidingView,Platform,View} from 'react-native';
import { connect } from 'react-redux';
import Toast, {DURATION} from 'react-native-easy-toast';
import {Wallpaper,Logo,SignupSection,Button,CustomInput} from '../../components';
import {usernameChanged,passwordChanged,login} from '../../redux/actions';
import UsernameImage from '../../assets/images/username.png';
import PasswordImage from '../../assets/images/password.png';
import Colors from '../../assets/colors/Colors'
import CommonStyles from '../../assets/styles/CommonStyles'
import styles from './styles';

 class LoginPage extends Component{

  static navigationOptions = {
    header: null,
    };
    
    Login() {
      const {username,password}=this.props;
        console.log(this.props);
        var data = {
          grant_type: 'password',
          Username: username,
          Password: password
        } //burası sonradan açılcak aşağısı silincek
        //  var data = {
        //   grant_type: 'password',
        //   Username: "ibrahimozyalcin",
        //   Password: "1234"
        // }
        this.props.login(data); 
        // if(this.props.showToastMessage != null) 
        // this.refs.toast.show(this.props.showToastMessage);
 
      }

    render(){
        return(
            <Wallpaper>
            <Logo />
            <KeyboardAvoidingView style={styles.container}   
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
            <CustomInput
            source={UsernameImage}
            placeholder="Kullanıcı Adı"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.props.username}
            onChangeText={username => this.props.usernameChanged(username)}
            inlineImg= {styles.inlineImg}
            inputStyle= {[styles.inputStyle,CommonStyles.textStyle,{color:'white'}]}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            multiline={false}
            numberOfLines={1}
            />
            <CustomInput
            source={PasswordImage}
            secureTextEntry={true}
            placeholder="Şifre"
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.props.password}
            onChangeText={password => this.props.passwordChanged(password)}
            inlineImg= {styles.inlineImg}
            inputStyle= {[styles.inputStyle,CommonStyles.textStyle,{color:'white'}]}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            multiline={false}
            numberOfLines={1}
            />
            </KeyboardAvoidingView>
            <Button 
            buttonStyle={[styles.button,CommonStyles.alignmentStyle]} 
            onPress={this.Login.bind(this)} 
            isLoading={this.props.loading}
            text="GİRİŞ"/>
            <View style={styles.container}></View>
            {/* <Toast
                    ref="toast"
                    style={this.props.showToastMesType == 'error' ? Styles.showToastError : ""}
                    //position='top'
                    //positionValue={200}
                    fadeInDuration={2000}
                    fadeOutDuration={2000}
                    opacity={0.8}
                    //textStyle={{color:'white'}}
                />          */}
                   {/* <SignupSection /> */}
            </Wallpaper>
        );
    }
}
  const mapStateToProps = ({loginResponse}) => {
    const { username, password, loading, showToastMessage,showToastMesType  } = loginResponse;
    return {
        username,
        password,
        loading,
        showToastMessage,
        showToastMesType
    };
};
  export default connect(mapStateToProps, {usernameChanged,passwordChanged,login})(LoginPage);