import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import AddTab from './tabs/AddTab';
import HomeTab from './tabs/HomeTab';
import ListTab from './tabs/ListTab';
import ProfileTab from './tabs/ProfileTab';
import RequestPermitTab from './tabs/RequestPermitTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from './icon/IconWithBadge';
import Colors from '../../assets/colors/Colors';

export default class MainScreen extends Component {

  MainNavigator;
  constructor(props) {
    super(props);
  }

  _setScreens = () => {
    const { isAdmin } = this.props;
    if (isAdmin) {
      HomeTabStack = createStackNavigator({
        HomeTab: { screen: RequestPermitTab },
        //Details: { screen: DetailsScreen },
      });
    }
    else {
      HomeTabStack = createStackNavigator({
        HomeTab: { screen: HomeTab },
        //Details: { screen: DetailsScreen },
      });
      AddTabStack = createStackNavigator({
        AddTab: { screen: AddTab },
        //Details: { screen: DetailsScreen },
      });
    }
    const ListTabStack = createStackNavigator({
      ListTab: { screen: ListTab },
      //Details: { screen: DetailsScreen },
    });

    const ProfileTabStack = createStackNavigator({
      ProfileTab: { screen: ProfileTab },
      //Details: { screen: DetailsScreen },
    });

    let tabs = {
      HomeTab: {
        screen: HomeTabStack,
        navigationOptions: ({ navigation }) => ({
          title: this.props.isAdmin ? "İzin Talepleri" : "Anasayfa"
        })
      },
      ListTab: {
        screen: ListTabStack,
        navigationOptions: ({ navigation }) => ({
          title: 'İzin Listesi'
        }),
      }
    }
    if (!isAdmin) {
      tabs.AddTab = {
        screen: AddTabStack,
        navigationOptions: ({ navigation }) => ({
          title: 'Yeni İzin',
        })
      }
    }

    tabs.ProfileTab = {
      screen: ProfileTabStack,
      navigationOptions: ({ navigation }) => ({
        title: 'Profil'
      })
    }

    this.MainNavigator = createBottomTabNavigator(
      tabs,
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor, this.props.isAdmin),
        }),
        tabBarOptions: {
          showIcon: true,
          activeTintColor: Colors.darkRed,
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 10,
          },
          style: {
            backgroundColor: 'white',
          },
        },
      }
    );

  };

  render() {
    this._setScreens();
    const { props } = this;
    const NavigatorTabs = createAppContainer(this.MainNavigator);
    return <NavigatorTabs screenProps={{ ...props }} />;
  }
}

const getTabBarIcon = (navigation, focused, tintColor, isAdmin) => {
  const { routeName } = navigation.state;
  console.log(routeName);
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'HomeTab') {
    if (isAdmin) {
      iconName = 'ios-notifications';
      IconComponent = HomeIconWithBadge;
    }
    else
      iconName = 'ios-home';
  } else if (routeName === 'ListTab') {
    //iconName = `ios-add-circle${focused ? '' : '-outline'}`;
    iconName = 'ios-list';
  }
  else if (routeName === 'AddTab') {
    iconName = 'ios-add-circle';
  }
  else if (routeName === 'ProfileTab') {
    iconName = 'ios-contact';
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};
