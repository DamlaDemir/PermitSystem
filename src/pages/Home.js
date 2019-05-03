import React,{Component} from 'react';
import MainScreen from './screens/MainScreen';

export default class Home extends Component {
    static navigationOptions = {
        header: null,
        };
    render(){
        return(
            <MainScreen/>
        );
    }
}
