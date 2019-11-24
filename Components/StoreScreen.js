import React from "react";
import { StyleSheet, View, Image, Dimensions, Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';

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
  StoreScreen.navigationOptions={
    tabBarIcon: ({tintColor}) => (
      <SvgUri height="30" width="30" style={styles.c_nav__item} fill={'#FFFFFF' ? tintColor : '#A8A8A8'} source={require('../assets/Store.svg')}/>
      )
  }

// #region Stylesheet
const styles = StyleSheet.create({
    c_background:{
      height: ScreenHeight,
      width: ScreenWidth,
      position: 'absolute'
    },
    c_nav__item:{
      color: '#A8A8A8',
      fontSize: 14,
    }
  });
// #endregion