import React from "react";
import { StyleSheet, View, Image, Dimensions, Button } from "react-native";
import SvgUri from "react-native-svg-uri";
import CameraScreen from "./CameraScreen";

let ScreenHeight = Dimensions.get("window").height + 40;
let ScreenWidth = Dimensions.get("window").width;

export default class IndexScreen extends React.Component {
  render() {
    const tabnav=this.props.navigation;
    return (
      <View style={styles.contentContainer}>
        <Image
          resizeMode={"stretch"}
          style={styles.c_background}
          source={require("../assets/BackgroundL.png")}
        />
        <Button title="aaaah"/>
        <Button title="useless" onPress={()=>{ this.props.navigation.navigate('Camera')}}/>
       
      </View>
    );
  }
}

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
