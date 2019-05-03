import React,{Component} from 'react';
import {KeyboardAvoidingView,Platform} from 'react-native';
import { CustomInput } from '../components';
import UsernameImage from '../images/username.png';
import PasswordImage from '../images/password.png';

class LoginForm extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          showPass: true,
          press: false,
        };
        //this.showPass = this.showPass.bind(this);
      }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container}   
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
            <CustomInput
            source={UsernameImage}
            placeholder="Kullanıcı Adı"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            />
            <CustomInput
            source={PasswordImage}
            secureTextEntry={this.state.showPass}
            placeholder="Şifre"
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            />
      </KeyboardAvoidingView>
        );
    }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  }
};

export {LoginForm};