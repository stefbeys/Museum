import React from "react";
import {StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback, Animated, Easing, Image} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class cameraCompanion extends React.Component {  
    constructor(props){
        super(props)
        this.moveAnim = new Animated.Value(ScreenHeight + 235)
    }

    componentDidMount(){
        Animated.timing(this.moveAnim, {
            toValue: ScreenHeight,
            duration: 1000,
            easing: Easing.ease
        }).start()
      }
  render() {
        return(
            <TouchableWithoutFeedback onPress={this._onPress} style={styles.test}>
                <View style={styles.c_container}>
                    <View style={styles.c_companion__cover}>
                    <Animated.View style={[styles.c_companionContainer, { transform: [{translateY: this.moveAnim}]} ]}>
                            <Image style={styles.c_companion} source={require('../assets/will.png')}/>
                            <View style={styles.c_companion__text_container}>
                                <Text style={styles.c_companion__title}>Will: </Text>
                                <Text style={styles.c_companion__text}>{this.props.scanText}</Text>
                                <Text style={styles.c_companion__text}>Tap anywhere to continue.</Text>
                            </View>
                        </Animated.View>
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

    c_companion__cover:{
        width: ScreenWidth,
        height: ScreenHeight,
        position: 'absolute',
        backgroundColor: '#000000ff',
        bottom: 0,
    },

    c_companionContainer:{
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        width: '100%',
        height: 235,
        bottom: -50,
        flex:1,
        flexDirection:'row',
        display: 'none'
    },

    c_companion:{
        margin: 12,
        marginTop: 24,
        height: 140,
        width: 140,
        resizeMode: 'contain',
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
