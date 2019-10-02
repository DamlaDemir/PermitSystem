import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie';
import { Container, Text, Content, Icon, Card, CardItem } from 'native-base';
import CommonStyles from '../../../assets/styles/CommonStyles';
import Colors from '../../../assets/colors/Colors';
import styles from './styles';


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
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={[{flex: 1 },CommonStyles.alignmentStyle]}>
          <View style={[{ flex: 3 },CommonStyles.alignmentStyle]}>
            <Pie
              radius={85}
              innerRadius={68}
              series={[55]}
              colors={[Colors.darkRed]}
              backgroundColor={Colors.lightGrey}
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>55%</Text>
            </View>

          </View >

          <View style={[{ flex: 1},CommonStyles.alignmentStyle]} >
            <Text style={CommonStyles.textStyle}>Yıllık İznin Yenilenmesine Kalan Süre: 365 </Text>
          </View>

        </View>
        <View style={{ flex: 1 }}>

          <Container>
            <Content>
              <Card>
                <CardItem style={styles.cardItemStyle} >
                  <Icon active name="add-circle" style={styles.iconStyle} />
                  <Text style={CommonStyles.textStyle}>Toplam Yıllık İzin : 15 </Text>
                </CardItem>
              </Card>

              <Card>
                <CardItem style={styles.cardItemStyle} >
                  <Icon active name="remove-circle" style={styles.iconStyle} />
                  <Text style={CommonStyles.textStyle}>Kullanılan Yıllık İzin : 5 </Text>
                </CardItem>
              </Card>

              <Card>
                <CardItem style={styles.cardItemStyle} >
                  <Icon active name="checkmark-circle" style={styles.iconStyle} />
                  <Text style={CommonStyles.textStyle}>Kalan Yıllık İzin : 10 </Text>
                </CardItem>
              </Card>

              <Card style={{ backgroundColor: "transparent" }}>
                <CardItem style={styles.cardItemStyle} >
                  <Icon active name="close-circle" style={styles.iconStyle} />
                  <Text style={CommonStyles.textStyle}>Diğer izinler : 0 </Text>
                </CardItem>
              </Card>

            </Content>

          </Container>

        </View>

      </View>
    );
  }
}

export default HomeTab;
