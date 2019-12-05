import React from "react";
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import { responsiveFontSize} from "react-native-responsive-dimensions";
import CameraCompanion from './cameraCompanion'

let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class Points extends React.Component {
  render() {
        return(
            <View>
                <CameraCompanion scanText={"You have received a reward for scanning the animal! You can later use all the points you’ve won!"} />
                <View style={styles.c_container}>
                    <View  style={styles.c_companionPoints_container}>
                        <View style={styles.c_companionPoints_overall_container}>
                            <Text style={styles.c_companionPoints_1}>Scanning Reward</Text>
                            <Image style={{marginLeft:45, height: 250, width: 250}}  source={require("../assets/points.png")} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

// #region Stylesheet
const styles = StyleSheet.create({
    c_container:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '100%',
        top: ScreenHeight/2.5,
        zIndex: 8,
        
    },

    c_companionPoints_overall_container:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 15,
        marginTop: 12
    },

    c_companionPoints_container:{
        margin:24,        
        height: ScreenWidth/1.4,
        width: ScreenWidth/1.4,
        top: 0,
    },
    c_companionPoints_1:{
        fontSize: responsiveFontSize(3.5),
        marginBottom: 24
    },
    c_companionPoints_2_1:{
        fontSize: responsiveFontSize(5),
    },
    c_companionPoints_2_2:{
        fontSize: responsiveFontSize(1.5),
    },
    c_flexbox:{
        flex:1,
        flexDirection: 'row'
    }
  });
  // #endregion
