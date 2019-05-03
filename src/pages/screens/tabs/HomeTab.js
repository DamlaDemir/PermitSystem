import React,{Component} from 'react';
import {View,TextInput,Dimensions} from 'react-native';

import { Container, Text, Content,Icon} from 'native-base';
import {CustomTimePicker,CustomDatePicker,Button} from '../../../components';

class HomeTab extends Component {
    static navigationOptions = {
        title: 'Home Tab',
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: 'white',
          flex: 1
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: "center",
            justifyContent: 'center',
            fontWeight: 'bold',
            textAlignVertical: 'center'
        },
      };//Steack navigator özelliğinden gelen sayfadaki headerın özellikleri

    render(){
        return(
          <Container>
          <Content>                
              <Text>First Tab</Text>
          </Content>
          </Container>
        );
    }
}


export default HomeTab;