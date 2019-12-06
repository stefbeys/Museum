import React from "react";
import { Image, View } from "react-native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./stylesheet";
import images from "./images";
export default class FAB extends React.Component {
  render() {
    return (
      <View style={styles.c_fab_container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.props.onTap}
          style={styles.c_fab}
        >
          <Image style={styles.c_fab__icon} source={this.props.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
FAB.defaultProps = {
  onTap: () => {},
  icon: images.fab
};
FAB.propTypes = {
  onTap: PropTypes.func,
  icon: PropTypes.any
};
