import React from "react";
import {createAppContainer } from "react-navigation";
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

export default class TabComponent extends React.Component {
  render() {
      const Tabpage=createAppContainer(createMaterialTopTabNavigator (this.props.Tabinfo,this.props.MainTabInfo))
    return <Tabpage/>;
  }
}
TabComponent.props = {
  Tabinfo: {},
  MainTabInfo: {}
};
TabComponent.defaultProps = {
  Tabinfo: Object,
  MainTabInfo:Object
};
