import React from "react";
import StoreScreen from "./StoreScreen";
import IndexScreen from "./IndexScreen";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import styles from "./stylesheet";

export default class TabScreen extends React.Component {
  //#region component functions
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
        style: styles.c_tabs,
        indicatorStyle: {
          backgroundColor: "white"
        }
      },
      tabBarPosition: "bottom"
    };
    const Tabpage = createAppContainer(
      createMaterialTopTabNavigator(tabs, barOptions)
    );

    return <Tabpage />;
  }
  //#endregion
}
