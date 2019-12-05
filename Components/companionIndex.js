import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Image
} from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import CONSTANT_STRINGS from "../assets/fi/strings";

let ScreenHeight = Dimensions.get("window").height + 40;
let ScreenWidth = Dimensions.get("window").width;

export default class Companion extends React.Component {
  //#region functions
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this._onPress = this._onPress.bind(this);
    this.moveAnim = new Animated.Value(325);
  }

  _onPress() {
    this.setState({
      display: false
    });
  }

  componentDidMount() {
    Animated.timing(this.moveAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.ease
    }).start();
  }
  //#endregion

  render() {
    if (this.state.display) {
      return (
        <TouchableWithoutFeedback onPress={this._onPress} style={styles.test}>
          <View style={styles.c_container}>
            <View style={styles.c_companion_upper_cover} />
            <View style={styles.c_companion__cover}>
              <Animated.View
                style={[
                  styles.c_companionContainer,
                  { transform: [{ translateY: this.moveAnim }] }
                ]}
              >
                <Image
                  style={styles.c_companion}
                  source={require("../assets/will.png")}
                />
                <View style={styles.c_companion__text_container}>
                  <Text style={styles.c_companion__title}>Will: </Text>
                  <Text style={styles.c_companion__text}>
                    {CONSTANT_STRINGS.COMPANION_ANIMAL_INFO}
                  </Text>
                  <Text style={styles.c_companion__text}>
                    {CONSTANT_STRINGS.COMPANION_CONTINUE}
                  </Text>
                </View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return <View></View>;
    }
  }
}

// #region Stylesheet
const styles = StyleSheet.create({
  test: {
    position: "absolute",
    height: ScreenHeight,
    width: ScreenWidth,
    zIndex: 5
  },
  c_companion_upper_cover: {
    width: ScreenWidth,
    height: 35,
    position: "absolute",
    backgroundColor: "#000000B3"
  },

  c_container: {
    width: ScreenWidth,
    height: ScreenHeight,
    position: "absolute",
    zIndex: 4
  },

  c_companion__cover: {
    width: ScreenWidth,
    height: ScreenHeight - 200,
    position: "absolute",
    backgroundColor: "#000000B3",
    bottom: 0
  },

  c_companionContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: "absolute",
    width: "100%",
    height: 235,
    bottom: -50,
    flex: 1,
    flexDirection: "row",
    display: "none"
  },

  c_companion: {
    margin: 12,
    marginTop: 24,
    height: 140,
    width: 140,
    resizeMode: "contain"
  },

  c_companion__text_container: {
    marginTop: 24,
    marginLeft: 12,
    width: "50%"
  },

  c_companion__title: {
    fontSize: responsiveFontSize(3.5)
  },

  c_companion__text: {
    fontSize: responsiveFontSize(2),
    marginBottom: 12
  }
});
// #endregion
