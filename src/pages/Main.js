/*
import React, {Component} from 'react';
import {} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginPage from '../pages/LoginPage';
import HomePage from './Home';

export default class Main extends Component{
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginPage" component={LoginPage} initial={true} hideNavBar={true}/>
          <Scene key="HomePage" component={HomePage} title="Home" hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}*/

import React,{Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';//provider'ın import edilmesi
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import LoginPage from './LoginPage';
import HomePage from './Home';
import NavigationService from '../navigation/NavigationServices';

export default class Main extends Component {

  componentWillMount(){
  if(1 == 1){
    const MainNavigator = createStackNavigator({
      Login: {screen: LoginPage},
      Home: {screen: HomePage},
    });
    MainContainer = createAppContainer(MainNavigator);  

  }else {
    const MainNavigator = createStackNavigator({
      Home: {screen: HomePage},
      Login: {screen: LoginPage},
    });
    MainContainer = createAppContainer(MainNavigator);  

  }

  }

  render() {
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    console.log(store.getState());
        return (
      <Provider store={store}>
        <MainContainer   
         ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    );
  }
}

