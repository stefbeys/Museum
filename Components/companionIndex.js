import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Image
} from "react-native";
import CONSTANT_STRINGS from "../assets/fi/strings";
import DB,{Pages} from "../Utils/DatabaseService";
import images from "./images";
import styles from './stylesheet';

export default class Companion extends React.Component {
  //#region functions
  _db=new DB();
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this._onPress = this._onPress.bind(this);
    this.moveAnim = new Animated.Value(325);
  }

_onPress() {
    this._db.saveCompanion(Pages.INDEX,true);
    this.setState({
      display: false
    });
  }

  async componentDidMount() {
    const isTutorial=await this._db.getCompanion(Pages.INDEX)
    this.setState({display:!isTutorial})
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
        <TouchableWithoutFeedback onPress={this._onPress} style={styles.c_companion_touch}>
          <View style={styles.c_companion_container}>
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
                  source={images.companion}
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
