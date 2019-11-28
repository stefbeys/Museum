import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CameraScreen from './CameraScreen';
import IndexScreen from './IndexScreen';

export default class AppNavigator extends React.Component{
    render(){
        const AppNavigator = createStackNavigator({
            Camera: CameraScreen,
          Home: IndexScreen ,
        },{
            initialRouteName:"Home",
            defaultNavigationOptions:{
                header:null
            }
        });
        const AppNav=createAppContainer(AppNavigator);
        return <AppNav/>;
    }
}
