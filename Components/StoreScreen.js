import React from "react";
import { StyleSheet, View, Image, Dimensions, Text} from 'react-native';

let ScreenHeight = Dimensions.get("window").height + 82;
let ScreenWidth = Dimensions.get("window").width;

export default class StoreScreen extends React.Component {
    render() {
        return(
            <View style={styles.contentContainer}>
                <Image resizeMode={'stretch'} style={styles.c_background} source={require('../assets/BackgroundL.png')}/>
                <Text>Store</Text>
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