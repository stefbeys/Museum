import React from 'react'
import MapScreen from './MapScreen';
import InfoScreen from './InfoScreen';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class InfoTab extends React.Component{
    render(){
        const tabs = {
            InfoScreen: InfoScreen,
            MapScreen: MapScreen
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
          const TabBar=createAppContainer(createMaterialTopTabNavigator (tabs,barOptions))
          return(<TabBar/>)

    }
}