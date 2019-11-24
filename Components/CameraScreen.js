import React from "react";
import { StyleSheet, View, Dimensions} from 'react-native';
import { RNCamera } from 'react-native-camera';

let ScreenHeight = Dimensions.get("window").height + 82;
let ScreenWidth = Dimensions.get("window").width;


export default class CameraScreen extends React.Component {
    render() {
        return(
            <View style={styles.contentContainer}>
                <RNCamera
                    ref={ref => {  this.camera = ref;}}
                    style={styles.preview}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    type={RNCamera.Constants.Type.back}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    
                    />
            </View>
        )
    }
  }

// #region Stylesheet
const styles = StyleSheet.create({
    c_background:{
      height: ScreenHeight,
      width: ScreenWidth,
      position: 'absolute'
    },
    contentContainer:{
        backgroundColor:"#000"
    }
  });
 // #endregion