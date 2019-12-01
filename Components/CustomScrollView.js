import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";

export default class CustomScrollView extends React.Component {
  constructor(props) {
    super(props);
    this.onGesture = this.onGesture.bind(this);
  }
  onGesture(event) {
    console.log(event);
  }
  render() {
    return (
      <PanGestureHandler onGestureEvent={this.onGesture}>
        {this.props.children}
      </PanGestureHandler>
    );
  }
}
