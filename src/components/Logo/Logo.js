import React,{Component} from 'react';
import {View,Image,Text} from 'react-native';
import LogoImage from '../../assets/images/logo.png';
import Styles from '../../assets/styles/CommonStyles';

class Logo extends Component{
    render(){
        const {container,image}=styles;
        return(
            <View style={[container,Styles.alignmentStyle]}>
                <Image style={image} source={LogoImage} />
                <Text style={[Styles.textStyle,{marginTop:20 ,color:'white'}]}>Yıllık İzin Takip Sistemine Hoşgeldiniz</Text>
            </View>
        );
    }
}

const styles ={
    container: {
        flex: 2
    },
    image: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        left:-30
    }
};

export {Logo};