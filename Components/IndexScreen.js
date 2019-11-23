import React from "react";
import { StyleSheet, View, Image, Dimensions} from 'react-native';

let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class IndexScreen extends React.Component {
  render() {
      return(
        <View style={styles.contentContainer}>
            <Image resizeMode={'stretch'} style={styles.c_background} source={require('../assets/BackgroundL.png')}/>
        </View>
      )
    
  }
}


// #region Stylesheet
const styles = StyleSheet.create({
    c_background:{
      height: ScreenHeight,
      width: ScreenWidth,
      position: 'absolute'
    }
  });
  // #endregion
