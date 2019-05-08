import React,{Component} from 'react';
import {View} from 'react-native';
import { Container, Text, Content,Icon} from 'native-base';
import {AccordionComponent} from '../../../components';
import Colors from '../../../assets/colors/Colors';

const dataArray = [
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "DOĞUM İZNİ", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "DOĞUM İZNİ", content: "Lorem ipsum dolor sit amet" },
    { title: "DOĞUM İZNİ", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },
    { title: "YILLIK İZİN", content: "Lorem ipsum dolor sit amet" },

  ];

class ListTab extends Component {
constructor(props){
    super(props)
}
    static navigationOptions = {
        title: 'Second Tab',
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
        const {container,container2}=styles;
        return(
            <Container style={container}>
                <Content>                
                    <AccordionComponent dataArray={dataArray} />               
                </Content>
            </Container>
        );
    }
}

const styles = {
    container: {
    backgroundColor:"#FEFFFF"
    }
}
export default ListTab;