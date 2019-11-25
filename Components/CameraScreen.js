import React from "react";
import { StyleSheet, View, Dimensions,Text,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

let ScreenHeight = Dimensions.get("window").height + 82;
let ScreenWidth = Dimensions.get("window").width;


export default class CameraScreen extends React.Component {
    state={
        hasCameraPermission:null,
        type: Camera.Constants.Type.back,
    }
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }
      render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
          return <View />;
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
            <View style={{ flex: 1 }}>
              <Camera style={{ flex: 1 }} type={this.state.type}
              ratio="16:9" useCamera2Api={true} autoFocus="on"
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        type:
                          this.state.type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                      });
                    }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          );
        }
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