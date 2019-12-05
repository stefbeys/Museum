import React from "react";
import {StyleSheet, Image, Dimensions, Animated, View, Easing} from 'react-native';

let ScreenHeight = Dimensions.get("window").height+48;
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
        this.moveAnimX5 = new Animated.Value(0)
        this.moveAnimY5 = new Animated.Value(0)
      }

      componentDidMount() {

        //#region X Animation
        Animated.loop(
            Animated.sequence([
                Animated.delay(5000),
                //#region Bird 1
                    Animated.timing(this.moveAnimX1, {
                        toValue: 135,
                        duration: 1000,
                        easing:Easing.linear
                    }),
                    Animated.timing(this.moveAnimX1, {
                        toValue: 200,
                        duration: 1000,
                        easing:Easing.linear
                    }),
                    Animated.timing(this.moveAnimX1, {
                        toValue: 300,
                        duration: 1000,
                        easing:Easing.linear
                    }),
                    Animated.timing(this.moveAnimX1, {
                        toValue: 400,
                        duration: 1000,
                        easing:Easing.linear
                    }),
                    Animated.timing(this.moveAnimX1, {
                        toValue: ScreenWidth+60,
                        duration: 1000,
                        easing:Easing.linear
                    }),
                    Animated.timing(this.moveAnimX1, {
                        toValue: ScreenWidth+60,
                        duration: 1000,
                        easing:Easing.linear
                    }),
                    Animated.timing(this.moveAnimX1, {
                        toValue: 0,
                        duration: 1000,
                        easing:Easing.linear
                    }),
                    //#endregion
                Animated.delay(5000),
                //#region Bird 2
                    Animated.timing(this.moveAnimX2, {
                        toValue: -50,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimX2, {
                        toValue: -175,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimX2, {
                        toValue: -275,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimX2, {
                        toValue: -450,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimX2, {
                        toValue: -625,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimX2, {
                        toValue: -625,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimX2, {
                        toValue: -50,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    //#endregion
                Animated.delay(5000),
                //#region Bird 3
                Animated.timing(this.moveAnimX3, {
                    toValue: 200,
                    duration: 1000,
                    easing: Easing.linear
                  }),
                  Animated.timing(this.moveAnimX3, {
                    toValue: 450,
                    duration: 1000,
                    easing: Easing.linear
                  }),
                  Animated.timing(this.moveAnimX3, {
                    toValue: ScreenWidth+60,
                    duration: 1000,
                    easing: Easing.linear
                  }),
                  Animated.timing(this.moveAnimX3, {
                    toValue: ScreenWidth+60,
                    duration: 1000,
                    easing: Easing.linear
                  }),
                  Animated.timing(this.moveAnimX3, {
                    toValue: -50,
                    duration: 1000,
                    easing: Easing.linear
                  }),
                  //#endregion
                Animated.delay(5000),
                //#region Bird 4
                    Animated.timing(this.moveAnimX4, {
                        toValue: -150,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimX4, {
                        toValue: -225,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimX4, {
                        toValue: -275,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    //#endregion
                Animated.delay(5000),
                //#region Bird4
            Animated.timing(this.moveAnimX5, {
                toValue: -175,
                duration: 1500,
                easing: Easing.linear
            }),
            Animated.timing(this.moveAnimX5, {
                toValue: -250,
                duration: 1500,
                easing: Easing.linear
            }),
            Animated.timing(this.moveAnimX5, {
                toValue: +50,
                duration: 1500,
                easing: Easing.linear
            }),
            //#endregion
                ])
        ).start()
        //#endregion

        //#region Y Animation
        Animated.loop(
            Animated.sequence([
                Animated.delay(5000),
                //#region Bird 1
                    Animated.timing(this.moveAnimY1, {
                        toValue: -50,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY1, {
                        toValue: -10,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY1, {
                        toValue: -25,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY1, {
                        toValue: -75,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY1, {
                        toValue: -30,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY1, {
                        toValue: +100,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY1, {
                        toValue: +100,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    //#endregion
                Animated.delay(5000),
                //#region Bird 2
                    Animated.timing(this.moveAnimY2, {
                        toValue: 70,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY2, {
                        toValue: 40,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY2, {
                        toValue: 0,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY2, {
                        toValue: 30,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY2, {
                        toValue: -80,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY2, {
                        toValue: ScreenHeight -60,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY2, {
                        toValue: ScreenHeight -60,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    //#endregion
                Animated.delay(5000),
                //#region Bird3
                    Animated.timing(this.moveAnimY3, {
                        toValue: -50,
                        duration: 1000,
                        easing: Easing.linear
                      }),
                      Animated.timing(this.moveAnimY3, {
                        toValue: -75,
                        duration: 1000,
                        easing: Easing.linear
                      }),
                      Animated.timing(this.moveAnimY3, {
                        toValue: 20,
                        duration: 1000,
                        easing: Easing.linear
                      }),
                      Animated.timing(this.moveAnimY3, {
                        toValue: ScreenHeight+ 50,
                        duration: 1000,
                        easing: Easing.linear
                      }),
                      Animated.timing(this.moveAnimY3, {
                        toValue: ScreenHeight + 50,
                        duration: 1000,
                        easing: Easing.linear
                      }),
                     //#endregion
                Animated.delay(5000),
                //#region Bird 4
                    Animated.timing(this.moveAnimY4, {
                        toValue: -70,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY4, {
                        toValue: -200,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    Animated.timing(this.moveAnimY4, {
                        toValue: -400,
                        duration: 1000,
                        easing: Easing.linear
                    }),
                    //#endregion
                Animated.delay(5000),
                //#region Bird 5
                Animated.timing(this.moveAnimY5, {
                    toValue: -150,
                    duration: 1500,
                    easing: Easing.linear
                }),
                Animated.timing(this.moveAnimY5, {
                    toValue: -350,
                    duration: 1500,
                    easing: Easing.linear
                }),
                Animated.timing(this.moveAnimY5, {
                    toValue: -500,
                    duration: 1500,
                    easing: Easing.linear
                }),
                //#endregion
            ])
        ).start()
        //#endregion

      }
    

    render(){
        return(
            <View>
                <Image resizeMode={'stretch'} style={styles.c_background} source={this.props.background}/>
                <Animated.Image style={[styles.js_animate_bird_1, { transform: [{ translateX: this.moveAnimX1}, {translateY: this.moveAnimY1 }]} ]} fill={'#000000'} source={require('../assets/eagle.png')}/>
                <Animated.Image style={[styles.js_animate_bird_2, { transform: [{ translateX: this.moveAnimX2}, {translateY: this.moveAnimY2 }]} ]} fill={'#000000'} source={require('../assets/dove.png')}/>
                <Animated.Image style={[styles.js_animate_bird_3, { transform: [{ translateX: this.moveAnimX3}, {translateY: this.moveAnimY3 }]} ]} fill={'#000000'} source={require('../assets/hummingbird.png')}/>
                <Animated.Image style={[styles.js_animate_bird_4, { transform: [{ translateX: this.moveAnimX4}, {translateY: this.moveAnimY4 }]} ]} fill={'#000000'} source={require('../assets/flock-of-birds.png')}/>
                <Animated.Image style={[styles.js_animate_bird_5, { transform: [{ translateX: this.moveAnimX5}, {translateY: this.moveAnimY5 }]} ]} fill={'#000000'} source={require('../assets/flock-of-birds.png')}/>
            </View>
            
        )
    }
}

backgrounds.defaultProps={
    background: require('../assets/BackgroundL.png')
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
        left: ScreenWidth + 75,
        top: ScreenHeight - 300,
      },
      js_animate_bird_3:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: -50,
        top: ScreenHeight/2
      },
      js_animate_bird_4:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: ScreenWidth + 50,
        top: +350
      },
      js_animate_bird_5:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: ScreenWidth + 50,
        top: ScreenHeight - 250
      },
})