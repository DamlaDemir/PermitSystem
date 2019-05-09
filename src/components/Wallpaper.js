import React,{Component} from 'react';
import {ImageBackground} from 'react-native';
import bgImage from '../images/background.jpg';

class Wallpaper extends Component{

    render(){
        return(
            <ImageBackground source={bgImage} style={styles.picture}>
            {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = {
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover' 
    }
};

export {Wallpaper};