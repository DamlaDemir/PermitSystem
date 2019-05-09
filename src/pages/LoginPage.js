import React,{Component} from 'react';
import {Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {Wallpaper,Logo,LoginForm,SignupSection,Button} from '../components';
import {usernameChanged,passwordChanged,login} from '../actions';
import {KeyboardAvoidingView,Platform} from 'react-native';
import { CustomInput } from '../components';
import UsernameImage from '../images/username.png';
import PasswordImage from '../images/password.png';
import Colors from '../assets/colors/Colors'
import Styles from '../assets/styles/styles'

//import {Actions} from 'react-native-router-flux';

 class LoginPage extends Component{

  static navigationOptions = {
    header: null,
    };
    
    Login() {
      const {username,password}=this.props;
        console.log(this.props);
        this.props.login({username,password});   
      }

    render(){
        const {container,button,text,inlineImg,inputStyle} =styles;
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
            inlineImg= {inlineImg}
            inputStyle= {[inputStyle,Styles.textStyle]}
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
            onChangeText={password => this.props.usernameChanged(password)}
            inlineImg= {inlineImg}
            inputStyle= {[inputStyle,Styles.textStyle]}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            multiline={false}
            numberOfLines={1}
            />
            </KeyboardAvoidingView>
            <Button 
            buttonStyle={button} 
            onPress={this.Login.bind(this)} 
            isLoading={this.props.isLoading}
            text="GİRİŞ"/>
            <SignupSection />
            </Wallpaper>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = {
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.darkRed,
      height: 40,
      width: DEVICE_WIDTH - 40,
      borderRadius: 20,
      zIndex: 100,
    }, 
     container: {
      flex: 1,
      alignItems: 'center',
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
      },
      inputStyle : {
        backgroundColor: 'transparent',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
        borderWidth:1,
        borderColor:'white'
    },
  };

  const mapStateToProps = ({loginResponse}) => {
    const { username, password, loading } = loginResponse;
    return {
        username,
        password,
        loading
    };
};
  export default connect(mapStateToProps, {usernameChanged,passwordChanged,login})(LoginPage);