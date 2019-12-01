import React from "react";
import { StyleSheet, View } from "react-native";
import TabScreen from "./Components/TabScreen";
import NavigationService from "./Utils/NavigationService";
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CameraScreen from "./Components/CameraScreen";
import Companion from './Components/companionIndex'

const TopLevelNavigator = createStackNavigator({
  TabScreen:TabScreen,
  CameraScreen:CameraScreen
},{
  defaultNavigationOptions:{
    header:null
}
});
const AppContainer = createAppContainer(TopLevelNavigator);

export default class App extends React.Component{
  render(){
    return (
      <View style={{flex:1}}>
        <AppContainer ref={navigationRef=>{NavigationService.setTopLevelNavigator(navigationRef)}}/>
        <Companion />
      </View>
    )
  }
}

// #region Stylesheet
const styles = StyleSheet.create({});
// #endregion
