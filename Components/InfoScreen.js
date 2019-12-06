import React from "react";
import { View, Text, Image, ScrollView, Animated } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import NavigationService from "../Utils/NavigationService";
import Background from "./background";
import { Accelerometer } from "expo-sensors";
import { Audio } from "expo-av";
import images from "./images";
import CONSTS from "./Constants";
import styles from "./stylesheet";

const soundObject = new Audio.Sound();
const HEADER_EXPANDED_HEIGHT = CONSTS.ScreenWidth;
const HEADER_COLLAPSED_HEIGHT = 108;

//this is shake sensitivity - lowering this will give high sensitivity and increasing this will give lower sensitivity
const THRESHOLD = 150;
export class ShakeEventExpo {
  static addListener(handler) {
    let last_x, last_y, last_z;
    let lastUpdate = 0;

    Accelerometer.addListener(accelerometerData => {
      let { x, y, z } = accelerometerData;
      let currTime = Date.now();
      if (currTime - lastUpdate > 100) {
        let diffTime = currTime - lastUpdate;
        lastUpdate = currTime;
        let speed =
          (Math.abs(x + y + z - last_x - last_y - last_z) / diffTime) * 10000;
        if (speed > THRESHOLD) {
          handler();
        }
        last_x = x;
        last_y = y;
        last_z = z;
      }
    });
  }

  static removeListener() {
    Accelerometer.removeAllListeners();
  }
}

export default class InfoScreen extends React.Component {
  //#region component functions
  constructor(props) {
    super(props);
    this.scrollY = new Animated.Value(0);
    this._onClosePress = this._onClosePress.bind(this);
  }
  async componentWillUnmount() {
    soundObject.setOnPlaybackStatusUpdate(null);
    await soundObject.stopAsync();
    await soundObject.unloadAsync();
    ShakeEventExpo.removeListener();
  }
  async componentDidMount() {
    await soundObject.loadAsync(require("../assets/Ristisorsa.mp3"));
    this.state = {
      isplaying: false
    };
    soundObject.setOnPlaybackStatusUpdate(status => {
      this.setState({ isplaying: status.isPlaying });
    });
  }

  componentWillMount() {
    ShakeEventExpo.addListener(() => {
      this.playSound();
    });
  }
  render() {
    const headerHeight = this.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.contentContainer}>
        <Background />
        <View style={styles.c_close}>
          <TouchableWithoutFeedback onPress={this._onClosePress}>
            <Image style={{ height: 30, width: 30 }} source={images.cross} />
          </TouchableWithoutFeedback>
        </View>
        <Animated.Image
          style={{
            height: headerHeight,
            width: CONSTS.ScreenWidth,
            position: "absolute",
            top: 0,
            left: 0
          }}
          source={NavigationService.getParam("selectedImage")}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.c_infoScreen__container}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.scrollY } } }
          ])}
          scrollEventThrottle={16}
          contentContainerStyle={{
            padding: 16,
            paddingTop: HEADER_EXPANDED_HEIGHT
          }}
        >
          <View style={styles.c_infoScreen__name_container}>
            <Text style={styles.c_infoScreen__name}>
              {NavigationService.getParam("selectedName")}
            </Text>
          </View>
          <Text style={styles.c_infoScreen__title}>Appearance</Text>
          <Text style={styles.c_infoScreen__appearance}>
            {NavigationService.getParam("selectedAppearance")}
          </Text>
          <Text style={styles.c_infoScreen__title}>Diet</Text>
          <Text style={styles.c_infoScreen__diet}>
            {NavigationService.getParam("selectedDiet")}
          </Text>
          <Text style={styles.c_infoScreen__title}>Behaviour</Text>
          <Text style={styles.c_infoScreen__behaviour}>
            {NavigationService.getParam("selectedBehaviour")}
          </Text>
          <Text style={styles.c_infoScreen__title}>Endangerment</Text>
          <Text style={styles.c_infoScreen__endangerment}>
            {NavigationService.getParam("selectedEndangerment")}
          </Text>
        </ScrollView>
      </View>
    );
  }
  //#endregion
  //#region methods
  async playSound() {
    try {
      if (!this.state.isplaying) {
        await soundObject.setPositionAsync(0);
        await soundObject.playAsync();
      }
    } catch (e) {
      console.warn(e);
    }
  }
  //#endregion
  //#region events
  _onClosePress() {
    NavigationService.navigate("TabScreen");
  }
  //#endregion
}
