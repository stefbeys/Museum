import React from "react";
import { StyleSheet, Image, View } from "react-native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { black } from "ansi-colors";
export default class FAB extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.props.onTap}
          style={styles.FAB}
        >
          <Image style={styles.FAB_Icon} source={this.props.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
FAB.defaultProps = {
  onTap: () => {},
  icon: require("./../assets/dove.png")
};
FAB.propTypes = {
  onTap: PropTypes.func,
  icon: PropTypes.any
};
const styles = StyleSheet.create({
  Container: {
    zIndex: 100,
    width: 50,
    height: 50,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    right: 25,
    bottom: 25
  },
  FAB: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    borderRadius: 50,
    borderWidth: 0,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffcb05"
  },
  FAB_Icon: {
    resizeMode: "contain",
    width: 41,
    height: 41
  }
});
