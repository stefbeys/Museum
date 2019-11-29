import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImageManipulator from 'expo-image-manipulator';
import * as Filesystem from "expo-file-system";
const ScreenHeight = Dimensions.get("window").height + 82;
const ScreenWidth = Dimensions.get("window").width;
const ENDPOINT = "http://192.168.0.176/api/";
let _camera;
export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.ScanImage = this.ScanImage.bind(this);
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async ScanImage() {
    let imageresult = await _camera.takePictureAsync();
    imageresult=await ImageManipulator.manipulateAsync(imageresult.uri,[{resize:{height:1920,width:1080}}])
    console.warn(imageresult);
    const base64 = await Filesystem.readAsStringAsync(imageresult.uri, {
      encoding: Filesystem.EncodingType.Base64
    });
    const httpresult = await fetch(ENDPOINT + "animal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Base64: base64 })
    });
    console.warn(httpresult);
    if(httpresult.status==200){
      console.log(await httpresult.json())
    }
    else{
      //not found error
    }
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted",
    });
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
          <Camera
            ref={cameraref => {
              _camera = cameraref;
            }}
            pictureSize="1920x1080"
            onTouchStart={this.ScanImage}
            style={{ flex: 1 }}
            type={this.state.type}
            ratio="16:9"
            useCamera2Api={true}
            autoFocus="on"
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparant"
              }}
            >
              <TouchableWithoutFeedback
                onPress={this.ScanImage}
                style={{
                  height: "100%",
                  width: "100%"
                }}
              ></TouchableWithoutFeedback>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

// #region Stylesheet
const styles = StyleSheet.create({
  c_background: {
    height: ScreenHeight,
    width: ScreenWidth,
    position: "absolute"
  },
  contentContainer: {
    backgroundColor: "#000"
  }
});
// #endregion
