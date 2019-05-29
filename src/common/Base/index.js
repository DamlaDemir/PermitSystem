import React, {Component} from 'react';
import NavigationService from '../../navigation/NavigationServices';

class BaseComponent extends Component {
    constructor(props) {
      super(props);
    }

    static AuthFunc(){
    NavigationService.navigate('Login');
    }

    static AlertMessage = (title, message) => {
      Alert.alert(
          title,
          message,//mesaj içeriği
          [
              { text: 'Tamam', onPress: () => null } //üstünde tamam yazan buton çıkcak
          ]
      );
  }
  
    render(t) {
        return t;
      }
}

export default BaseComponent;
