import React from 'react'
import StoreScreen from "./StoreScreen";
import IndexScreen from './IndexScreen';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class TabScreen extends React.Component {
  render() {
    const tabs = {
      IndexScreen: IndexScreen,
      StoreScreen: StoreScreen
    };
    const barOptions = {
      tabBarOptions: {
        activeTintColor: "#F8F8F8",
        inactiveTintColor: "#A8A8A8",

        showIcon: true,
        showLabel: false,
        style: {
          backgroundColor: "#405F7E",
          borderTopWidth: 0,
          height: 60,
        },
        indicatorStyle: {
          backgroundColor: 'white',
        },
      },
      tabBarPosition: "bottom",

    };
    const Tabpage = createAppContainer(createMaterialTopTabNavigator(tabs, barOptions))

    return (
      <Tabpage />)
  }
}