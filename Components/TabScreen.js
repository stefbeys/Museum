import React from 'react'
import StoreScreen from "./StoreScreen";
import TabComponent from './TabComponent';
import IndexTab from './IndexTab';

export default class TabScreen extends React.Component {
    render() {
        const tabs = {
            IndexScreen: IndexTab,
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
                height: 60
              }
            },
            tabBarPosition: "bottom"
          };
          return(
       <TabComponent Tabinfo={tabs}  MainTabInfo={barOptions}/>)
    }
  }