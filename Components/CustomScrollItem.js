import React from "react";
import {View} from 'react-native';
export default class CustomScrollItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const margin=(Math.abs(this.props.selectedindex-this.props.index)*5)+"%";
    return (
      <View style={this.props.selectedindex==this.props.index?{ borderWidth: 2, borderColor: "#fff", borderRadius: 12}:{marginLeft:margin}}>        
        {this.props.children}
      </View>
    );
  }
}
