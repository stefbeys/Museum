import React from 'react';
import SvgUri from 'react-native-svg-uri';
import { StyleSheet } from 'react-native';
import TabComponent from './Components/TabComponent';
import IndexScreen from './Components/IndexScreen';
import StoreScreen from './Components/StoreScreen';
import CameraScreen from './Components/CameraScreen';

export default function App() {
  const tabs={
    Home:{screen:IndexScreen, navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <SvgUri height="30" width="30" style={styles.c_nav__item} fill={'#FFFFFF' ? tintColor : '#A8A8A8'} source={require('./assets/Index.svg')}/>
        )
      })
    },
    Profile:{screen:StoreScreen, navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <SvgUri height="30" width="30" style={styles.c_nav__item} fill={'#FFFFFF' ? tintColor : '#A8A8A8'} source={require('./assets/Store.svg')}/>
        )
      })
    },
    Settings:{screen:CameraScreen, navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <SvgUri height="30" width="30" style={styles.c_nav__item} fill={'#FFFFFF' ? tintColor : '#A8A8A8'} source={require('./assets/Cam.svg')}/>
        )
      })
    },
  }
  const barOptions={
    tabBarOptions: {  
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#A8A8A8', 
      
      showIcon: true,  
      showLabel: false,  
      style: {
        backgroundColor: '#405F7E',
        borderTopWidth: 0,
        height: 60
      },
    },
    tabBarPosition:"bottom"
  }
  
  return (
    <TabComponent Tabinfo={tabs} MainTabInfo={barOptions} />
  );
}

// #region Stylesheet
const styles = StyleSheet.create({
  c_nav__item:{
    color: '#A8A8A8',
    fontSize: 14,
  }
});
// #endregion