import React, { Component } from "react";
import { View, Picker } from "react-native";
import Styles from '../../assets/styles/CommonStyles';

  class OPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  stringToObj(obj, is, value) {
    if (typeof is == "string")
      return this.stringToObj(obj, is.split("."), value);
    else if (is.length == 1 && value !== undefined) return (obj[is[0]] = value);
    else if (is.length == 0) return obj;
    else return this.stringToObj(obj[is[0]], is.slice(1), value);
  }

  onValueChange(selected) {
    this.setState({ selected: selected });
    if (this.props.returnType == "obj") {
      if (selected == -1) {
        this.props.onChange(-1);
      } else {
        var valueData = this.props.value;
        var listData = this.props.data;
        var selectedData = listData.find(e => {
          return this.stringToObj(e, valueData) == selected;
        });
        this.props.onChange(selectedData);
      }
    } else {
      this.props.onChange(selected);
    }
  }

  generateLabel(obj, data, format) {
    let labelStr = format;
    data.forEach(d => {
      let replaceText = "%" + d + "%";
      // let replaceText =  d ;
      labelStr = labelStr.replace(replaceText, this.stringToObj(obj, d));
    });
    return labelStr;
  }

  renderPicker() {
    var self = this;
    var labelData = this.props.label;
    var labelFormat = this.props.format;
    var labelDefault = this.props.defaultLabel;
    var valueData = this.props.value;
    return (
      <Picker
        selectedValue={this.props.selectedval ? this.props.selectedval : this.state.selected}
        onValueChange={this.onValueChange}
        enabled = {this.props.enabled}
        style={{height:20}} 
      >
        <Picker.Item key={-1} label={labelDefault} value={-1} style={Styles.textStyle} />
        {self.props.data.map((d, i) => {
          return (
            <Picker.Item
              key={i}
              label={this.generateLabel(d, labelData, labelFormat)}
              value={this.stringToObj(d, valueData)}
            />
          );
        })}
      </Picker>
    );
  }

  render() {
    return <View>{this.renderPicker()}</View>;
  }
}

export {OPicker};