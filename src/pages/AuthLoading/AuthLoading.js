import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import LocalStorageService from '../../services/LocalStorageServices';
import StorageEnum from '../../common/Enums/StorageEnum';
import BaseComponent from '../../common/Base/index'; 
import {Loading} from '../../components';

class AuthLoading extends BaseComponent {
    constructor(props){
        super(props);
    }
  componentDidMount() {
    this.authPage();
  }

  authPage = async () => {
    let r = await LocalStorageService.getItemAsync(StorageEnum.TOKEN);
    this.props.navigation.navigate(!r.hasError && r.value != "" && r.value != null ? 'App' : 'Auth');
  };
  render() {
    return (
      <View>
        <Loading loading={true} />
      </View>
    );
  }
}

export default AuthLoading;