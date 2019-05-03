import React,{Component} from 'react';
import {createBottomTabNavigator ,createAppContainer ,createStackNavigator } from 'react-navigation';
import AddTab from './tabs/AddTab';
import HomeTab from './tabs/HomeTab';
import ListTab from './tabs/ListTab';
import ProfileTab from './tabs/ProfileTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from './icon/IconWithBadge';

//stack navigator sayesinde mesela 1.tab içine buton koyup başka sayfaya geçiş yapılabilir.Yani tablar içinde yeni sayfaalra geçiş için her bir
//tab stack navigator olarak ayarlandı.
const HomeTabStack = createStackNavigator({
  HomeTab: { screen: HomeTab },
    //Details: { screen: DetailsScreen },
  });
  
  const ListTabStack = createStackNavigator({
    ListTab: { screen: ListTab },
    //Details: { screen: DetailsScreen },
  });
  const AddTabStack = createStackNavigator({
    AddTab: { screen: AddTab },
    //Details: { screen: DetailsScreen },
  });  
  const ProfileTabStack = createStackNavigator({
    ProfileTab: { screen: ProfileTab },
    //Details: { screen: DetailsScreen },
  });
  
const MainNavigator = createBottomTabNavigator (
    {
        HomeTab: {
            screen:HomeTabStack,
            navigationOptions: ({navigation}) => ({
              title: 'Anasayfa'   
          })
        },
        ListTab: {
            screen:ListTabStack,
            navigationOptions: ({navigation}) => ({
              title: 'İzin Listesi'   
          })
        },
        AddTab: {
            screen:AddTabStack,
            navigationOptions: ({navigation}) => ({
              title: 'Yeni İzin'   
          })
        },
        ProfileTab:{
            screen:ProfileTabStack,
            navigationOptions: ({navigation}) => ({
              title: 'Profil'   
          })
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
              getTabBarIcon(navigation, focused, tintColor),
            }),
        tabBarOptions: {
          showIcon:true,     
          activeTintColor: '#698b22',
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
 
      const getTabBarIcon = (navigation, focused, tintColor) => {
        const { routeName } = navigation.state;
        console.log(routeName);
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'HomeTab') {
          iconName = 'ios-home';          
          //IconComponent = HomeIconWithBadge;
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

      /*const HomeIconWithBadge = props => {
        return <IconWithBadge {...props} badgeCount={3} />;
      };*/


export default createAppContainer(MainNavigator);




