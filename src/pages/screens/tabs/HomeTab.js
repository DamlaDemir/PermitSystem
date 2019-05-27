import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie';
import { Container, Text, Content, Icon, Card, CardItem } from 'native-base';


class HomeTab extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'ANASAYFA',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerRight: (<View></View>),
    headerStyle: {
      backgroundColor: 'white'
      //flex: 1
    },
    headerTintColor: '#6B7A8F',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: "center",
      justifyContent: 'center',
      fontWeight: 'bold',
      textAlignVertical: 'center',
    },
  };//Steack navigator özelliğinden gelen sayfadaki headerın özellikleri

  render() {
    const { gauge, gaugeText, cardStyle, cardItemStyle, textStyle,iconStyle,viewStyle,TopViewStyle } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={[{flex: 4 },viewStyle,TopViewStyle]}>
          <View style={[{ flex: 3 },viewStyle]}>

            <Pie
              radius={85}
              innerRadius={68}
              series={[55]}
              colors={['#c62828']}
              backgroundColor='#f5f5f5'
            />

            <View style={gauge}>
              <Text style={gaugeText}>55%</Text>
            </View>

          </View >

          <View style={[{ flex: 1},viewStyle]} >
            <Text style={textStyle}>Yıllık İznin Yenilenmesine Kalan Süre: 365 </Text>
          </View>

        </View>
        <View style={{ flex: 4 }}>

          <Container>

            <Content style={{ backgroundColor: '#fff' }}>

              <Card style={cardStyle}>
                <CardItem style={cardItemStyle} >
                  <Icon active name="add-circle" style={iconStyle} />
                  <Text style={textStyle}>Toplam Yıllık İzin : 15 </Text>
                </CardItem>
              </Card>

              <Card style={{ backgroundColor: "transparent" }}>
                <CardItem style={cardItemStyle} >
                  <Icon active name="remove-circle" style={iconStyle} />
                  <Text style={textStyle}>Kullanılan Yıllık İzin : 5 </Text>
                </CardItem>
              </Card>

              <Card style={{ backgroundColor: "transparent" }}>
                <CardItem style={cardItemStyle} >
                  <Icon active name="checkmark-circle" style={iconStyle} />
                  <Text style={textStyle}>Kalan Yıllık İzin : 10 </Text>
                </CardItem>
              </Card>

              <Card style={{ backgroundColor: "transparent" }}>
                <CardItem style={cardItemStyle} >
                  <Icon active name="close-circle" style={iconStyle} />
                  <Text style={textStyle}>Diğer izinler : 0 </Text>
                </CardItem>
              </Card>

            </Content>

          </Container>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  gauge: {
    position: 'absolute',
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#6B7A8F',
    fontSize: 45,
  },
  cardStyle: {
    backgroundColor: "transparent"
  },
  cardItemStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRightWidth: 4,
    borderRightColor: "rgba(203, 0, 0, 0.66)"
  },
  textStyle: {
    color: 'black',
    fontWeight: "100",
    fontSize: 16,
    fontFamily: "Montserrat-Light"
  },
  iconStyle: {
    color: '#6b7a8f'
  },
  viewStyle: {
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  TopViewStyle: {
    borderWidth: 3, 
    elevation: 3, 
    borderColor: "rgba(255, 255, 255, 0.2)"
  }
});

export default HomeTab;
