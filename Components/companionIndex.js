import React from "react";
import {StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import SvgUri from 'react-native-svg-uri';

let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class Companion extends React.Component {
  //#region functions
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this._onPress = this._onPress.bind(this)
  }

  _onPress() {
    this.setState({
      display: false
    });
  }
  //#endregion

  render() {
    if(this.state.display){
        return(
            <TouchableWithoutFeedback onPress={this._onPress} style={styles.test}>
                <View style={styles.c_container}>
                    <View style={styles.c_companion_upper_cover}/>
                    <View style={styles.c_companion__cover}>
                        <View style={styles.c_companionContainer}>
                            <SvgUri height={200} width={200} style={styles.c_companion} source={require('../assets/companion.svg')}/>
                            <View style={styles.c_companion__text_container}>
                                <Text style={styles.c_companion__title}>Willy: </Text>
                                <Text style={styles.c_companion__text}>You can see the info about the animal that is currently selected.</Text>
                                <Text style={styles.c_companion__text}>Tap anywhere to continue.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    else{
        return(<View></View>)
    }
  }
}

// #region Stylesheet
const styles = StyleSheet.create({
    test:{
        position: 'absolute',
        height: ScreenHeight,
        width: ScreenWidth,
        zIndex: 5,
    },
    c_companion_upper_cover:{
        width: ScreenWidth,
        height: 35,
        position: 'absolute',
        backgroundColor: '#000000B3',
    },

    c_container:{
        width:ScreenWidth,
        height: ScreenHeight,
        position: 'absolute',
        zIndex: 4
    },

    c_companion__cover:{
        width: ScreenWidth,
        height: ScreenHeight - 175,
        position: 'absolute',
        backgroundColor: '#000000B3',
        bottom: 0
    },

    c_companionContainer:{
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        width: ScreenWidth,
        height: ScreenHeight/4,
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
        width: 250
    },

    c_companion__title:{
        fontSize: 32,
    },

    c_companion__text:{
        fontSize: 18,
        marginBottom: 24
    }


  });
  // #endregion
