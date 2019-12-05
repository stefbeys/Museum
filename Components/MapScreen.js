import React from 'react';
import {View, StyleSheet} from  'react-native';
import SvgUri from "react-native-svg-uri";
export default class MapScreen extends React.Component{
    render(){
        return(
        <View></View>
        );
    }
}

MapScreen.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <SvgUri
        height="30"
        width="30"
        style={styles.c_nav__item}
        fill={"#FFFFFF" ? tintColor : "#A8A8A8"}
        source={require("../assets/region.svg")}
      />
    )
  };

  // #region Stylesheet
const styles = StyleSheet.create({

  });
  // #endregion