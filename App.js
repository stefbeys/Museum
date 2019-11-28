import React from "react";
import { StyleSheet } from "react-native";
import TabScreen from "./Components/TabScreen";
import NavigationService from "./Utils/NavigationService";
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CameraScreen from "./Components/CameraScreen";
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
    return <AppContainer ref={navigationRef=>{NavigationService.setTopLevelNavigator(navigationRef)}}/>
  }
}
// #region Stylesheet
const styles = StyleSheet.create({});
// #endregion
