import React,{Component} from 'react';
import {View,Image,Text} from 'react-native';
import LogoImage from '../images/logo.png';
import Styles from '../assets/styles/styles'

class Logo extends Component{
    render(){
        const {container,image,text}=styles;
        return(
            <View style={container}>
                <Image style={image} source={LogoImage} />
                <Text style={[Styles.textStyle,{fontWeight:'300',color:'white'}]}>Yıllık İzin Takip Sistemine Hoşgeldiniz</Text>
            </View>
        );
    }
}

const styles ={
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    image: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        left:-30
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop:20,
    }
};

export {Logo};