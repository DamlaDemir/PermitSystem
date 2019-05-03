import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";

class AccordionComponent extends Component {
 
  _renderHeader(item, expanded) {
    const {headerStyle,iconStyle}=styles;
    return (
      <View style={headerStyle}>
      <Text style={{ fontWeight: "300" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={iconStyle} name="remove-circle" />
          : <Icon style={iconStyle} name="ios-add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          padding: 10,
          fontStyle: "italic",
          backgroundColor:"#FFF5EE"
        }}
      >
        {item.content}
      </Text>
    );
  }
  render() {
    return (
          <Accordion
            dataArray={this.props.dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
    );
  }
}
<br/>

const styles = {
  headerStyle:{
    flexDirection: "row",
    padding: 10,
    margin:5,
    justifyContent: "space-between",
    alignItems: "center" ,
    backgroundColor: "white",
    borderWidth:0.5,
    borderColor:'#800000',
    borderRadius: 100

  },
  iconStyle: {
    fontSize: 18 , 
    color:'#800000' 
  }

}

export {AccordionComponent};