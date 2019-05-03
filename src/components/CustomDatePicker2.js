import React,{Component} from 'react';
import { Container, Text, Content,Icon,DatePicker} from 'native-base';

class CustomDatePicker2 extends Component {

    constructor() {
        super();
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

    render(){
        const {dpTextStyle,dpPlaceHolderTextStyle}=styles;
        return(
            <Content>
            <DatePicker
              //defaultDate={new Date()}
             // minimumDate={new Date()}
              //maximumDate={new Date(2018, 12, 31)}
              locale={"tr"}
              //timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              //androidMode={"spinner"}
              placeHolderText="Tarih Seçiniz"
              textStyle={dpTextStyle}
              placeHolderTextStyle={dpPlaceHolderTextStyle}
              onDateChange={this.setDate}
              disabled={false}
              mode='time'
              />       
          </Content>
        );

    }
}

const styles = {
    dpTextStyle: {
        color : "pink"
    },
    dpPlaceHolderTextStyle: {
        color: "#d3d3d3"
    }
};

export {CustomDatePicker2};