import React from "react";
import {StyleSheet, View, Text, Dimensions, Image, Animated, Easing} from 'react-native';
import { responsiveFontSize} from "react-native-responsive-dimensions";
import CameraCompanion from './cameraCompanion'
import { requireNativeViewManager } from "@unimodules/core";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Fade from "react-native-fade";


let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class InfoComponent extends React.Component {
    constructor(props){
        super(props)
        this.movePic = new Animated.Value(0);
        this.scalePic = new Animated.Value(2);
        this.state= {
            showInfo: false
        }
        
    }

    componentDidMount(){
            Animated.sequence([
                Animated.delay(1000),
                Animated.timing(this.movePic, {
                    toValue: -150,
                    duration: 1000,
                    easing: Easing.ease
                })
            ]).start()

            Animated.sequence([
                Animated.delay(1000),
                Animated.timing(this.scalePic, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.ease
                })
            ]).start()

            setTimeout(() => {
                this.setState({
                    showInfo: true
                })
            }, 1750);
            
    }

  render() {
        return(
            <View>
                <View style={styles.c_container}>
                        <Animated.Image style={[styles.c_shortInfo__img, , {transform:[{scale: this.scalePic}, {translateY: this.movePic}]}]} source={this.props.img}/>
                        <Fade visible={this.state.showInfo}>
                            <View style={styles.c_shortInfo}>   
                                <View style={{backgroundColor: 'white', borderRadius: 15}}>
                                    <Text style={styles.c_shortInfo__name}>{this.props.name}</Text>
                                    <Text style={styles.c_shortInfo__title}>Size</Text>
                                    <Text style={styles.c_shortInfo__data_1}>Length: {this.props.sizeL}</Text>
                                    <Text style={styles.c_shortInfo__data}>Wingspan: {this.props.sizeW}</Text>
                                    <Text style={styles.c_shortInfo__title}>Diet</Text>
                                    <Text style={styles.c_shortInfo__data}>{this.props.diet}</Text>
                                    <Text style={styles.c_shortInfo__title}>Region</Text>
                                    <Text style={styles.c_shortInfo__data_last}>{this.props.region}</Text>
                                    <Text style={styles.c_shortInfo__data}>Tap to continue.</Text>
                                </View>
                            </View>
                        </Fade>
                </View>
            </View>
        )
    }
}

InfoComponent.props = {
    diet: "",
    sizeL: "",
    sizeW: "",
    region:"",
    name:"",
    img: ""
}

// #region Stylesheet
const styles = StyleSheet.create({
    c_shortInfo__touchable:{
        width: ScreenWidth,
        height: ScreenHeight,
        zIndex: 10,
        backgroundColor: 'white'
    },

    c_container:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '100%',
        top: ScreenHeight/2.5,
        zIndex: 8,
        
    },
    c_shortInfo__img:{
        margin:24,    
        height: ScreenWidth/2,
        width: ScreenWidth/2,
        top: 0,
        backgroundColor: 'white',
        borderRadius: 15
    },
    c_shortInfo:{
        margin:24,        
        height: ScreenWidth/1.4,
        width: ScreenWidth/1.4,
        top: 0,
        marginTop: 0,   
        top: -150
    },
    c_shortInfo__title:{
        fontSize: responsiveFontSize(3),
        marginLeft: 24,
    },
    c_shortInfo__name:{
        fontSize: responsiveFontSize(3.5),
        marginLeft: 24,
        marginBottom: 12
    },
    c_shortInfo__data:{
        fontSize: responsiveFontSize(1.7),
        marginBottom: 8,
        marginLeft: 24,
    },
    c_shortInfo__data_1: {
        fontSize: responsiveFontSize(1.7),
        marginLeft: 24,
    },
    c_shortInfo__data_last: {
        fontSize: responsiveFontSize(1.7),
        marginLeft: 24,
        marginBottom: 24
    },
    c_flexbox:{
        flex:1,
        flexDirection: 'row'
    }
  });
  // #endregion
