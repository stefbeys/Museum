import React from 'react';
import {View} from  'react-native';
import NavigationService from '../Utils/NavigationService';
export default class InfoScreen extends React.Component{
    render(){
        console.warn(NavigationService.getParam("selectedAnimal"))
        return(
        <View></View>)
    }
}