import React from "react";
import { View, Text, Animated, Easing } from "react-native";
import Fade from "react-native-fade";
import styles from "./stylesheet";

export default class InfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.movePic = new Animated.Value(0);
    this.scalePic = new Animated.Value(2);
    this.state = {
      showInfo: false
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(this.movePic, {
        toValue: -150,
        duration: 1000,
        easing: Easing.ease
      })
    ]).start();

    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(this.scalePic, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease
      })
    ]).start();

    setTimeout(() => {
      this.setState({
        showInfo: true
      });
    }, 1750);
  }

  render() {
    return (
      <View>
        <View style={styles.c_container}>
          <Animated.Image
            style={[
              styles.c_shortInfo__img,
              ,
              {
                transform: [
                  { scale: this.scalePic },
                  { translateY: this.movePic }
                ]
              }
            ]}
            source={this.props.img}
          />
          <Fade visible={this.state.showInfo}>
            <View style={styles.c_shortInfo}>
              <View style={{ backgroundColor: "white", borderRadius: 15 }}>
                <Text style={styles.c_shortInfo__name}>{this.props.name}</Text>
                <Text style={styles.c_shortInfo__title}>Size</Text>
                <Text style={styles.c_shortInfo__data_1}>
                  Length: {this.props.sizeL}
                </Text>
                <Text style={styles.c_shortInfo__data}>
                  Wingspan: {this.props.sizeW}
                </Text>
                <Text style={styles.c_shortInfo__title}>Diet</Text>
                <Text style={styles.c_shortInfo__data}>{this.props.diet}</Text>
                <Text style={styles.c_shortInfo__title}>Region</Text>
                <Text style={styles.c_shortInfo__data_last}>
                  {this.props.region}
                </Text>
                <Text style={[styles.c_shortInfo__data, styles.u_margin_bottom]}>
                  Tap to continue.
                </Text>
              </View>
            </View>
          </Fade>
        </View>
      </View>
    );
  }
}

InfoComponent.props = {
  diet: "",
  sizeL: "",
  sizeW: "",
  region: "",
  name: "",
  img: ""
};
