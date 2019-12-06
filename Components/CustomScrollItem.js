import React from "react";
import { Animated, Easing } from "react-native";
export default class CustomScrollItem extends React.Component {
  constructor(props) {
    super(props);
    this.replaceAnim = new Animated.Value(0);
    this.opacityanim = new Animated.Value(0);
  }

  componentDidMount() {
    const margin = Math.abs(this.props.selectedindex - this.props.index) * 40;
    const opacity =
      100 / (Math.abs(this.props.index - this.props.selectedindex) + 1) / 80;

    Animated.timing(this.replaceAnim, {
      toValue: margin.toString(),
      duration: 250,
      easing: Easing.ease
    }).start();
    Animated.timing(this.opacityanim, {
      toValue: opacity,
      duration: 250,
      easing: Easing.ease
    }).start();
  }
  componentDidUpdate() {
    const margin = Math.abs(this.props.selectedindex - this.props.index) * 40;
    const opacity =
      100 / (Math.abs(this.props.index - this.props.selectedindex) + 1) / 80;

    Animated.timing(this.replaceAnim, {
      toValue: margin.toString(),
      duration: 250,
      easing: Easing.ease
    }).start();
    Animated.timing(this.opacityanim, {
      toValue: opacity,
      duration: 250,
      easing: Easing.ease
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={
          this.props.selectedindex == this.props.index
            ? {
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 12,
                zIndex: 10
              }
            : { marginLeft: this.replaceAnim, opacity: this.opacityanim }
        }
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
