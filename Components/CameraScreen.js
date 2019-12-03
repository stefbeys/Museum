import React from "react";
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Animated}from "react-native";
import SvgUri from "react-native-svg-uri";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImageManipulator from "expo-image-manipulator";
import * as Filesystem from "expo-file-system";
import Points from "./points";
import InfoComponent from "./Infocomponent";
import NavigationService from "../Utils/NavigationService";


const ScreenHeight = Dimensions.get("window").height + 82;
const ScreenWidth = Dimensions.get("window").width;
const ENDPOINT = "http://88.114.129.242/api/";
let _camera;
export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.ScanImage = this.ScanImage.bind(this);
    this.scannerAnim = new Animated.Value(0);
    this.stopScannerAnim = new Animated.Value(0);
    this._onStartPress = this._onStartPress.bind(this);
    this._onPointsPress = this._onPointsPress.bind(this);
    this._onClosePress = this._onClosePress.bind(this);
    this._onInfoPress = this._onInfoPress.bind(this);
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    displayScannerAnim: false,
    displayPoints: false,
    displayInfo: false,
    displayScanner: true,
    name: "",
    appearance: "",
    behaviour: "",
    diet: "",
    endangerment: "",
    img: 'require("")',
    sizeL: "",
    sizeW: "",
    dietShort: "",
    region: "",
  };

  _onStartPress() {
    this.setState({
      displayScannerAnim: true
    });
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.scannerAnim, {
          toValue: ScreenHeight - 2,
          duration: 3000
        }),
        Animated.timing(this.scannerAnim, {
          toValue: 0,
          duration: 3000
        })
      ])
    ).start();
    setTimeout(() => {
      this.ScanImage();
      }, 750);
  }

  _onStopPress() {
    this.setState({
      displayScannerAnim: false
    });
  }

  _onPointsPress() {      
      this.setState({
        displayPoints: false,
        displayScanner: false,
        displayInfo: true,
        displayScannerAnim: false
      });
  }

  _onInfoPress(){
    setTimeout(() => {
      this.setState({
        displayPoints: false,
        displayScanner: true,
        displayInfo: false,
        displayScannerAnim: false
      })
    }, 1750);
    NavigationService.navigate('InfoTabComponent')
  }
  
  _onClosePress(){
    this.props.navigation.goBack()
  }

  async ScanImage() {
    let imageresult = await _camera.takePictureAsync();
    imageresult = await ImageManipulator.manipulateAsync(imageresult.uri, [
      { resize: { height: 1920, width: 1080 } }
    ]);
    console.warn(imageresult);
    const base64 = await Filesystem.readAsStringAsync(imageresult.uri, {
      encoding: Filesystem.EncodingType.Base64
    });
    try {
      const httpresult = await fetch(ENDPOINT + "animal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Base64: base64 })
      });
      if (httpresult.status == 200) {
        let animaldata= await httpresult.json();
        console.log(animaldata);
        this.setState({
          displayPoints: true,
          displayScanner: false,
          displayInfo: false,
          displayScannerAnim: false,
          name: animaldata.name,
          appearance: animaldata.appearance,
          behaviour: animaldata.behaviour,
          diet: animaldata.diet,
          endangerment: animaldata.endangerment,
          sizeL: animaldata["length"],
          sizeW: animaldata.width,
          dietShort: animaldata.dietShort,
          region: animaldata.region,
          

        });
      } else {
        //not found error
      }
    } catch (e) {
      //fetch failed... network error or server not online!
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
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


          {this.state.displayScannerAnim ? (
            <Animated.View style={{ top: this.scannerAnim}}>
              <View style={styles.c_scanner}></View>
            </Animated.View>
          ) : null}


          {this.state.displayPoints ? (
            <View style={styles.c_touchableView}>
              <TouchableWithoutFeedback style={styles.c_touchable} onPress={() => this._onPointsPress()}>
                <Points/>
              </TouchableWithoutFeedback>
            </View>
          ) : null }

          {this.state.displayInfo ? (
            <View style={styles.c_touchableView}>
              <TouchableWithoutFeedback style={styles.c_touchable} onPress={() => this._onInfoPress()}>
                <InfoComponent img={this.state.img} name={this.state.name} diet={this.state.dietShort} region={this.state.region} sizeL={this.state.sizeL} sizeW={this.state.sizeW} />
              </TouchableWithoutFeedback>
            </View>
          ) : null }

          {this.state.displayScanner ? (
            <View style={styles.c_close}>
              <TouchableWithoutFeedback  onPress={() => this._onClosePress()}>
                <SvgUri height="30" width="30"  source={require("../assets/close.svg")}/>
              </TouchableWithoutFeedback>
            </View>
          ) : null }

          {this.state.displayScanner ? (
           
            <View style={styles.c_scanner__container}>
              <TouchableWithoutFeedback
                style={styles.c_scanner__button_container}
                onPressIn={() => this._onStartPress()}
                onPressOut={() => this._onStopPress()}
              >
                <SvgUri
                  height="80"
                  width="80"
                  style={styles.c_scanner__button}
                  source={require("../assets/scan.svg")}
                />
              </TouchableWithoutFeedback>
            </View>) : null
          }


          <Camera
            ref={cameraref => {
              _camera = cameraref;
            }}
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
            </View>
          </Camera>
        </View>
      );
    }
  }
}

// #region Stylesheet
const styles = StyleSheet.create({
  c_touchable:{
    width: ScreenWidth,
    height: ScreenHeight,
    zIndex: 10
  },
  c_touchableView:{
    zIndex: 6,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  c_close:{
    zIndex: 7,
    position: 'absolute',
    top: 64,
    left: 32
  },

  c_background: {
    height: ScreenHeight,
    width: ScreenWidth,
    position: "absolute",
  },
  contentContainer: {
    backgroundColor: "#000"
  },
  c_scanner: {
    width: "100%",
    height: 3,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 7,
    shadowColor: "#000000",
    shadowOffset: {
      width: 10,
      height: 50
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 13
  },
  c_scanner__button: {
    zIndex: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  c_scanner__container: {
    bottom: "10%",
    zIndex: 6,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  c_scanner__button_container: {
    width: 100,
    height: 100,
    zIndex: 7
  }
});
// #endregion
