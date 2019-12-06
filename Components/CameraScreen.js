import React from "react";
import { View, Animated, Image } from "react-native";
import SvgUri from "react-native-svg-uri";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImageManipulator from "expo-image-manipulator";
import * as Filesystem from "expo-file-system";
import Points from "./points";
import InfoComponent from "./Infocomponent";
import NavigationService from "../Utils/NavigationService";
import CONSTANT_STRINGS from "../assets/fi/strings";
import DB from "../Utils/DatabaseService";
import CONSTS from "./Constants";
import styles from "./stylesheet";
import images from "./images";

export default class CameraScreen extends React.Component {
  _camera;
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
    sizeL: "",
    sizeW: "",
    dietShort: "",
    region: "",
    image: ""
  };

  //#region  component functions
  constructor(props) {
    super(props);
    this.ScanImage = this.ScanImage.bind(this);
    this.scannerAnim = new Animated.Value(0);
    this.stopScannerAnim = new Animated.Value(0);
    this._onPointsPress = this._onPointsPress.bind(this);
    this._onClosePress = this._onClosePress.bind(this);
    this._onInfoPress = this._onInfoPress.bind(this);
    this._onLongPress = this._onLongPress.bind(this);
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
      return CONSTANT_STRINGS.NO_ACCESS_CAMERA;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {this.state.displayScannerAnim ? (
            <Animated.View style={{top: this.scannerAnim }}>
              <View style={styles.c_scanner}></View>
            </Animated.View>
          ) : null}

          {this.state.displayScannerAnim ? (
            <View style={styles.c_scanningImage}>
              <Image
                style={styles.c_scanningImage_image}
                source={images.scanAnimal}
              />
            </View>
          ) : null}

          {this.state.displayPoints ? (
            <View style={styles.c_touchableView}>
              <TouchableWithoutFeedback
                style={styles.c_touchable}
                onPress={() => this._onPointsPress()}
              >
                <Points />
              </TouchableWithoutFeedback>
            </View>
          ) : null}

          {this.state.displayInfo ? (
            <View style={styles.c_touchableView}>
              <TouchableWithoutFeedback
                style={styles.c_touchable}
                onPress={() => this._onInfoPress()}
              >
                <InfoComponent
                  img={this.state.image}
                  name={this.state.name}
                  diet={this.state.dietShort}
                  region={this.state.region}
                  sizeL={this.state.sizeL}
                  sizeW={this.state.sizeW}
                />
              </TouchableWithoutFeedback>
            </View>
          ) : null}

          {this.state.displayScanner ? (
            <View style={styles.c_close}>
              <TouchableWithoutFeedback onPress={() => this._onClosePress()}>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={images.cross}
                />
              </TouchableWithoutFeedback>
            </View>
          ) : null}

          {this.state.displayScanner ? (
            <View style={styles.c_scanner__container}>
              <TouchableWithoutFeedback
                style={styles.c_scanner__button_container}
                onLongPress={() => this._onLongPress()}
              >
                <SvgUri
                  height="80"
                  width="80"
                  style={styles.c_scanner__button}
                  source={images.scan}
                />
              </TouchableWithoutFeedback>
            </View>
          ) : null}

          <Camera
            ref={cameraref => {
              this._camera = cameraref;
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
            ></View>
          </Camera>
        </View>
      );
    }
  }
  //#endregion
  //#region events
  _onLongPress() {
    this.ScanImage();
    this.setState({
      displayScannerAnim: true
    });
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.scannerAnim, {
          toValue: CONSTS.ScreenHeight + 32,
          duration: 3000
        }),
        Animated.timing(this.scannerAnim, {
          toValue: 0,
          duration: 3000
        })
      ])
    ).start();
  }
  _onPointsPress() {
    this.setState({
      displayPoints: false,
      displayScanner: false,
      displayInfo: true,
      displayScannerAnim: false
    });
  }

  _onInfoPress() {
    setTimeout(() => {
      this.setState({
        displayPoints: false,
        displayScanner: true,
        displayInfo: false,
        displayScannerAnim: false
      });
    }, 1750);
    if (undefined != this.props.navigation.state.params) {
      this.props.navigation.state.params.onGoBack();
    }
    NavigationService.navigate("InfoScreen", {
      selectedName: this.state.name,
      selectedAppearance: this.state.appearance,
      selectedDiet: this.state.diet,
      selectedBehaviour: this.state.behaviour,
      selectedEndangerment: this.state.endangerment,
      selectedImage: this.state.image
    });
  }

  _onClosePress() {
    if (undefined != this.props.navigation.state.params) {
      this.props.navigation.state.params.onGoBack();
    }
    this.props.navigation.goBack();
  }
  //#endregion
  //#region functions
  async ScanImage() {
    let imageresult = await this._camera.takePictureAsync();
    imageresult = await ImageManipulator.manipulateAsync(imageresult.uri, [
      { resize: { height: 1920, width: 1080 } }
    ]);
    const base64 = await Filesystem.readAsStringAsync(imageresult.uri, {
      encoding: Filesystem.EncodingType.Base64
    });
    try {
      const httpresult = await fetch(CONSTS.ENDPOINT + "animal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Base64: base64 })
      });
      if (httpresult.status == 200) {
        let animaldata = await httpresult.json();
        const db = new DB();
        const test = await db.addAnimal({
          ...animaldata,
          image: imageresult.uri
        });
        if (test) {
          await db.addCredits(400);
        }
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
          image: { isstatic: true, uri: imageresult.uri }
        });
      } else {
        this.setState({
          displayPoints: false,
          displayScanner: true,
          displayInfo: false,
          displayScannerAnim: false
        });
      }
    } catch (e) {
      this.setState({
        displayPoints: false,
        displayScanner: true,
        displayInfo: false,
        displayScannerAnim: false
      });
    }
  }
  //#endregion
}
