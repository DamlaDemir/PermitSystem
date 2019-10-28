import React, {Component} from 'react';
import {Alert} from 'react-native';
import NavigationService from '../../navigation/NavigationServices';
import LocalStorageService from '../../services/LocalStorageServices';
import StorageEnum from '../../common/Enums/StorageEnum';

class BaseComponent extends Component {
    constructor(props) {
      super(props);
    }

    static AuthFunc(){
    LocalStorageService.setItemAsync(
        StorageEnum.TOKEN,
        ""
    );
    NavigationService.navigate('Auth');
    }

    static AlertMessage = (title, message) => {
      Alert.alert(
          title,
          message,//mesaj içeriği
          [
              { text: 'Tamam', onPress: () => null } 
          ]
      );
  }
  
    render(t) {
        return t;
      }
}

export default BaseComponent;
