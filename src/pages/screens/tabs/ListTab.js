import React,{Component} from 'react';
import {View} from 'react-native';
import { Container, Text, Content,Icon} from 'native-base';
import {AccordionComponent} from '../../../components';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../assets/styles/styles';

const dataArray = [
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "DOĞUM İZNİ", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "DOĞUM İZNİ", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
  ];

class ListTab extends Component {
constructor(props){
    super(props)
}
    static navigationOptions = {
        title: 'İzin Listesi',
        headerRight: (<View></View>),
        headerStyle: {
            backgroundColor: Colors.lightWhite,
            borderBottomWidth: 1,
            borderColor: Colors.blueberry,
        },
        headerTintColor: Colors.blueberry,
        headerTitleStyle: Styles.textStyle
      };
    render(){
        return(
            <Container style={Styles.container}>
                <Content>                
                    <AccordionComponent dataArray={dataArray} />               
                </Content>
            </Container>
        );
    }
}

export default ListTab;