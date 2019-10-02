import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from '../../components/icon/IconWithBadge';
import AddTab from '../Screens/PermitAdd/AddTab';
import HomeTab from '../Screens/Home/HomeTab';
import ListTab from '../Screens/PermitList/ListTab';
import ProfileTab from '../Screens/Profile/ProfileTab';
import CalendarTab from '../Screens/PermitCalendar/CalendarTab';
import RequestPermitTab from '../Screens/PermitRequest/RequestPermitTab';
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

    const CalendarTabStack = createStackNavigator({
      CalendarTab: { screen: CalendarTab },
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

      tabs.CalendarTab = {
        screen: CalendarTabStack,
        navigationOptions: ({ navigation }) => ({
          title: 'İzin Takvimi'
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
  else if (routeName === 'CalendarTab') {
    iconName = 'md-calendar';
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};
