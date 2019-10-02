import React, { Component } from 'react';
import MainScreen from '../Main/MainScreen';
import LocalStorageService from '../../services/LocalStorageServices';
import StorageEnum from '../../common/Enums/StorageEnum';

export default class Home extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props)
        this.state = {
            isAdmin: false,
        };
        LocalStorageService.getItemAsync(StorageEnum.USER).then(user => {
            if (user.value.IsAdmin) {
                this.setState({ isAdmin : true });
            }
        });
    }

    render() {
        return (
            <MainScreen isAdmin={this.state.isAdmin} />
        );
    }
}
