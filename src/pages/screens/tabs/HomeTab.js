import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie';
import { Container, Text, Content, Icon, Card, CardItem, Body } from 'native-base';

class HomeTab extends Component {
  static navigationOptions = {
    title: 'ANASAYFA',
    headerRight: (<View></View>),
    headerStyle: {
      backgroundColor: 'white',
      //flex: 1
    },
    headerTintColor: '#6B7A8F',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: "center",
      justifyContent: 'center',
      fontWeight: 'bold',
      textAlignVertical: 'center'
    },
  };//Steack navigator özelliğinden gelen sayfadaki headerın özellikleri

  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'#e9e9e9'}}>
        <View style={{ flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Pie
              radius={70}
              innerRadius={58}
              series={[30]}
              colors={['#a9b7c0']}
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>55%</Text>
            </View>
          </View >
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >

            <Text style={{fontSize:15}}>Yıllık İznin Yenilenmesine Kalan Süre: 365 </Text>

          </View>

        </View>
        <View style={{ flex: 5 }}>
          <View style={{ flex: 1 }}>
            <Container>
              <Content style={{backgroundColor:'#e9e9e9'}}>
                <Card>
                  <CardItem  >
                    <Icon active name="add-circle" style={{color:'#6b7a8f'}}/>
                    <Text>Toplam Yıllık İzin : 15 </Text>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem>
                    <Icon active name="remove-circle" style={{color:'#6b7a8f'}} />
                    <Text>Kullanılan Yıllık İzin : 5 </Text>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem>
                    <Icon active name="checkmark-circle" style={{color:'#6b7a8f'}} />
                    <Text>Kalan Yıllık İzin : 10 </Text>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem>
                    <Icon active name="close-circle" style={{color:'#6b7a8f'}} />
                    <Text>Diğer izinler : 0 </Text>
                  </CardItem>
                </Card>
              </Content>
            </Container>
          </View>
          {/* <View style={{ flex: 1 }}>
            <Container>
              <Content>
                <Card>
                  <CardItem>
                    <Icon active name="remove-circle" style={{color:'#DCC7AA'}} />
                    <Text>Kullanılan Yıllık İzin : 5 </Text>
                  </CardItem>
                </Card>
              </Content>
            </Container>
          </View>
          <View style={{ flex: 1 }}>
            <Container>
              <Content>
                <Card>
                  <CardItem>
                    <Icon active name="checkmark-circle" style={{color:'#DCC7AA'}} />
                    <Text>Kalan Yıllık İzin : 10 </Text>
                  </CardItem>
                </Card>
              </Content>
            </Container>
          </View>
          <View style={{ flex: 1 }}>
            <Container>
              <Content>
                <Card>
                  <CardItem>
                    <Icon active name="close-circle" style={{color:'#DCC7AA'}} />
                    <Text>Diğer izinler : 0 </Text>
                  </CardItem>
                </Card>
              </Content>
            </Container>
          </View> */}
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
    fontSize: 40,
  },
});

export default HomeTab;