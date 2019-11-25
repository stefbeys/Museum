import React from "react";
import { StyleSheet, View, Image, Dimensions, Button } from "react-native";
import SvgUri from "react-native-svg-uri";
import Navigation from '../Utils/navigatorUtil'
let ScreenHeight = Dimensions.get("window").height + 40;
let ScreenWidth = Dimensions.get("window").width;

export default class IndexTab extends React.Component {
  render() {
    return (
        <Navigation/>
    );
  }
}
IndexTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <SvgUri
      height="30"
      width="30"
      style={styles.c_nav__item}
      fill={"#FFFFFF" ? tintColor : "#A8A8A8"}
      source={require("../assets/Index.svg")}
    />
  )
};

// #region Stylesheet
const styles = StyleSheet.create({
  c_button: {
height:100  },
  c_background: {
    height: ScreenHeight,
    width: ScreenWidth,
    position: "absolute"
  },
  c_nav__item: {
    color: "#A8A8A8",
    fontSize: 14
  }
});
// #endregion
