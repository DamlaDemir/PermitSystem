import React, {Component} from 'react';
import NavigationService from '../../navigation/NavigationServices';

class BaseComponent extends Component {
    constructor(props) {
      super(props);
    }

    static AuthFunc(){
    NavigationService.navigate('Login');
    }
    render(t) {
        return t;
      }
}

export default BaseComponent;
