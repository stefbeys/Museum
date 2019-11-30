import React from "react";
import {StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class cameraCompanion extends React.Component {  
  render() {
        return(
            <TouchableWithoutFeedback onPress={this._onPress} style={styles.test}>
                <View style={styles.c_container}>
                    <View style={styles.c_companion_upper_cover}/>
                    <View style={styles.c_companion__cover}>
                        <View style={styles.c_companionContainer}>
                            <SvgUri height={150} width={150} style={styles.c_companion} source={require('../assets/companion.svg')}/>
                            <View style={styles.c_companion__text_container}>
                                <Text style={styles.c_companion__title}>Willy: </Text>
                                <Text style={styles.c_companion__text}>{this.props.scanText}</Text>
                                <Text style={styles.c_companion__text}>Tap anywhere to continue.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

cameraCompanion.props = {
    scanText: {}
}

// #region Stylesheet
const styles = StyleSheet.create({
    test:{
        position: 'absolute',
        height: ScreenHeight,
        width: ScreenWidth,
        zIndex: 5,
    },

    c_container:{
        width:ScreenWidth,
        height: ScreenHeight,
        position: 'absolute',
        zIndex: 4
    },

    c_companion__cover:{
        width: ScreenWidth,
        height: ScreenHeight,
        position: 'absolute',
        backgroundColor: '#000000B3',
        bottom: 0
    },

    c_companionContainer:{
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        width: '100%',
        height: '30%',
        bottom: -50,
        flex:1,
        flexDirection:'row',
        display: 'none'
    },

    c_companion:{
        marginLeft: 12
    },

    c_companion__text_container:{
        marginTop: 24,
        marginLeft: 24,
        width: '50%'
    },

    c_companion__title:{
        fontSize: responsiveFontSize(3.5),
    },

    c_companion__text:{
        fontSize: responsiveFontSize(2),
        marginBottom: 24
    }


  });
  // #endregion
