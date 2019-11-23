import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabComponent from './Components/TabComponent';
import HomeScreen from './Pages';
import ProfileScreen from './Pages/profile';
import SettingScreen from './Pages/settings';

export default function App() {
  const tabs={
   Home:HomeScreen,
   Profile:ProfileScreen,
   Settings:SettingScreen
  }
  const barOptions={
    tabBarOptions: {  
      activeTintColor: 'white',  
      showIcon: true,  
      showLabel:false,  
      style: {  
          backgroundColor:'red'  
      } ,
    },
    tabBarPosition:"bottom"
  }
  return (
    <TabComponent Tabinfo={tabs} MainTabInfo={barOptions} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
