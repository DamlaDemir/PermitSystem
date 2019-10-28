import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";

 class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <OrientationLoadingOverlay
          visible={this.props.loading}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
          message="Lütfen Bekleyin... "
        />
      </View>
    );
  }
}

export {Loading}