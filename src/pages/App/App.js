import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';//provider'ın import edilmesi
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../../redux/reducers';
import NavigationService from '../../navigation/NavigationServices';
import LoginPage from '../Login/LoginPage';
import HomePage from '../Home/Home';
import AuthLoading from '../AuthLoading/AuthLoading';

const AppStack = createStackNavigator({ Home: HomePage});
const AuthStack = createStackNavigator({ Login: LoginPage });

export default class App extends Component {

  componentWillMount() {
    const MainNavigator = createSwitchNavigator(
      {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    );
    MainContainer = createAppContainer(MainNavigator);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
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
