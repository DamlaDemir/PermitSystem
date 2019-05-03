import React,{Component} from 'react';
import {View} from 'react-native';
import { Container, Text, Content,Icon} from 'native-base';
import {AccordionComponent} from '../../../components';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

class ListTab extends Component {
constructor(props){
    super(props)
    alert("damla");

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
        const {container}=styles;
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
      backgroundColor:'#FFF5EE'
    }
}
export default ListTab;