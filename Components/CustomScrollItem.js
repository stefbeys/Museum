import React from "react";
import {View, Animated, Easing} from 'react-native';
export default class CustomScrollItem extends React.Component {
  constructor(props) {
    super(props);
    this.replaceAnim = new Animated.Value(0);
  }

  componentDidMount(){
        const margin=(Math.abs(this.props.selectedindex-this.props.index)*40);
        Animated.timing(this.replaceAnim, {
          toValue: margin.toString(),
          duration: 250,
          easing: Easing.ease
        }).start()
  }
  componentDidUpdate(){
        const margin=(Math.abs(this.props.selectedindex-this.props.index)*40);
        Animated.timing(this.replaceAnim, {
          toValue: margin.toString(),
          duration: 250,
          easing: Easing.ease
        }).start()
  }

  render() {
    return (
      <Animated.View style={this.props.selectedindex==this.props.index?{ borderWidth: 2, borderColor: "#fff", borderRadius: 12}:{marginLeft: this.replaceAnim}}>    
        {this.props.children}    
      </Animated.View>
    );
  }
}
