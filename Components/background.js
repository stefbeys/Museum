import React from "react";
import {StyleSheet, Image, Dimensions, Animated, View} from 'react-native';

let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class backgrounds extends React.Component{
    constructor(props) {
        super(props);
        this.moveAnimX1 = new Animated.Value(0)
        this.moveAnimY1 = new Animated.Value(0)
        this.moveAnimX2 = new Animated.Value(0)
        this.moveAnimY2 = new Animated.Value(0)
        this.moveAnimX3 = new Animated.Value(0)
        this.moveAnimY3 = new Animated.Value(0)
        this.moveAnimX4 = new Animated.Value(0)
        this.moveAnimY4 = new Animated.Value(0)
      }

      componentDidUpdate() {
        //#region Eagle Animation
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.moveAnimX1, {
              toValue: 135,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX1, {
              toValue: 200,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX1, {
              toValue: 300,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX1, {
              toValue: 400,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX1, {
              toValue: ScreenWidth+60,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX1, {
              toValue: ScreenWidth+60,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX1, {
              toValue: 0,
              duration: 1000,
            }),
          ])
        ).start()
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.moveAnimY1, {
              toValue: -50,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY1, {
              toValue: -10,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY1, {
              toValue: -25,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY1, {
              toValue: -75,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY1, {
              toValue: -30,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY1, {
              toValue: +100,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY1, {
              toValue: +100,
              duration: 1000,
            }),
          ])
        ).start()
        //#endregion
    
        //#region Layer2 Animations
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.moveAnimX2, {
              toValue: 135,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX2, {
              toValue: 200,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX2, {
              toValue: 300,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX2, {
              toValue: 400,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX2, {
              toValue: ScreenWidth+60,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX2, {
              toValue: ScreenWidth+60,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX2, {
              toValue: 0,
              duration: 1000,
            }),
          ])
        ).start()
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.moveAnimY2, {
              toValue: -50,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY2, {
              toValue: -10,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY2, {
              toValue: -25,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY2, {
              toValue: -75,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY2, {
              toValue: -30,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY2, {
              toValue: +100,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY2, {
              toValue: +100,
              duration: 1000,
            }),
          ])
        ).start()
        //#endregion
    
        //#region Layer3 Animations
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.moveAnimX3, {
              toValue: 135,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX3, {
              toValue: 200,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX3, {
              toValue: 300,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX3, {
              toValue: 400,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX3, {
              toValue: ScreenWidth+60,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX3, {
              toValue: ScreenWidth+60,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX3, {
              toValue: 0,
              duration: 1000,
            }),
          ])
        ).start()
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.moveAnimY3, {
              toValue: -50,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY3, {
              toValue: -10,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY3, {
              toValue: -25,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY3, {
              toValue: -75,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY3, {
              toValue: -30,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY3, {
              toValue: +100,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY3, {
              toValue: +100,
              duration: 1000,
            }),
          ])
        ).start()
        //#endregion
    
        //#region Layer4 Animations
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.moveAnimX4, {
              toValue: 135,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX4, {
              toValue: 200,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX4, {
              toValue: 300,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX4, {
              toValue: 400,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX4, {
              toValue: ScreenWidth+60,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX4, {
              toValue: ScreenWidth+60,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimX4, {
              toValue: 0,
              duration: 1000,
            }),
          ])
        ).start()
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.moveAnimY4, {
              toValue: -50,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY4, {
              toValue: -10,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY4, {
              toValue: -25,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY4, {
              toValue: -75,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY4, {
              toValue: -30,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY4, {
              toValue: +100,
              duration: 1000,
            }),
            Animated.timing(this.moveAnimY4, {
              toValue: +100,
              duration: 1000,
            }),
          ])
        ).start()
        //#endregion
    
      }

    render(){
        return(
            <View>
<Image resizeMode={'stretch'} style={styles.c_background} source={require('../assets/BackgroundL.png')}/>
            <Animated.Image style={[styles.js_animate_bird_1, { transform: [{ translateX: this.moveAnimX1}, {translateY: this.moveAnimY1 }]} ]} fill={'#000000'} source={require('../assets/eagle.png')}/>
          <Animated.Image style={[styles.js_animate_bird_2, { transform: [{ translateX: this.moveAnimX2}, {translateY: this.moveAnimY2 }]} ]} fill={'#000000'} source={require('../assets/dove.png')}/>
          <Animated.Image style={[styles.js_animate_bird_3, { transform: [{ translateX: this.moveAnimX3}, {translateY: this.moveAnimY3 }]} ]} fill={'#000000'} source={require('../assets/hummingbird.png')}/>
          <Animated.Image style={[styles.js_animate_bird_4, { transform: [{ translateX: this.moveAnimX4}, {translateY: this.moveAnimY4 }]} ]} fill={'#000000'} source={require('../assets/flock-of-birds.png')}/>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    c_background:{
        height: ScreenHeight,
        width: ScreenWidth,
        position: 'absolute'
    },
    js_animate_bird_1:{
        position: 'absolute',
        left: -60,
        top: ScreenHeight - 100,
        height: 60,
        width: 60,
  
      },
      js_animate_bird_2:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: ScreenWidth - 75,
        top: ScreenHeight - 300
      },
      js_animate_bird_3:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: 75,
        top: ScreenHeight/2
      },
      js_animate_bird_4:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: ScreenWidth - 100,
        top: +100
      },
})