import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Image
} from "react-native";
import images from "./images";
import styles from "./stylesheet";
import CONSTS from './Constants';
import CONSTANT_STRINGS from "../assets/fi/strings";

export default class cameraCompanion extends React.Component {
  constructor(props) {
    super(props);
    this.moveAnim = new Animated.Value(CONSTS.ScreenHeight + 235);
  }

  componentDidMount() {
    Animated.timing(this.moveAnim, {
      toValue: CONSTS.ScreenHeight,
      duration: 1000,
      easing: Easing.ease
    }).start();
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this._onPress}
        style={styles.c_companion_touch}
      >
        <View>
          <View style={styles.c_companion__cover}>
            <Animated.View
              style={[
                styles.c_companionContainer,
                { transform: [{ translateY: this.moveAnim }] }
              ]}
            >
              <Image style={styles.c_companion} source={images.companion} />
              <View style={styles.c_companion__text_container}>
                <Text style={styles.c_companion__title}>Will: </Text>
                <Text style={styles.c_companion__text}>
                  {this.props.scanText}
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
  }
}

cameraCompanion.props = {
  scanText: {}
};
