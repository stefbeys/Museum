import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { PanGestureHandler } from "react-native-gesture-handler";

let _scrollref;
let selecteditem = -1
export default class CustomList extends React.Component {
  constructor(props) {
    super(props);
    this.scrollEvent = this.scrollEvent.bind(this);
    this.scrollEnd = this.scrollEnd.bind(this);
    this.state = {
      zIndex: 0
    };
  }
  componentDidMount() {
    if (this.props.data.length > 0) {
      selecteditem = 0;
      this.props.selectedEvent(this.props.data[selecteditem]);
    }
  }
  scrollEnd(event) {
    console.log("test");
    if (this.state.zIndex != 0) {
      this.setState({ zIndex: 0 });
    }
  }
  scrollEvent(event) {
    if (this.state.zIndex != 1) {
      this.setState({ zIndex: 1 })
    }
    if (event.nativeEvent.contentOffset.y / 100 > this.props.data.length - 1) {
      _scrollref.scrollTo({ y: (this.props.data.length - 1) * 100 })
    }
    let selecti = event.nativeEvent.contentOffset.y / 100;
    selecti = Math.round(selecti);
    if (selecti != selecteditem) {
      selecteditem = selecti;
      if (selecteditem < this.props.data.length) {

        this.props.selectedEvent(this.props.data[selecteditem])
      }
    }
  }
  render() {
    const renderItems = () => {
      const ListItems = [];
      let index = 0;
      for (let item of this.props.data) {
        var test = this.props.renderItem(item, index);
        index++;
        ListItems.push(test);
      }
      return ListItems;
    };
    return (
      <View style={{ flex: 1 }}>
        <View style={{ position: "absolute", height: 100, marginTop: "65%", width: "100%", borderWidth: 2, borderColor: "#fff", borderRadius: 12, zIndex: this.state.zIndex }} />
        <ScrollView
          onMomentumScrollEnd={this.scrollEnd}
          showsVerticalScrollIndicator={false}
          ref={scrollref => { _scrollref = scrollref }}
          contentContainerStyle={{ paddingBottom: "145%" }}
          onScroll={this.scrollEvent}
          snapToInterval={100}
          snapToAlignment="center"
          style={{ flex: 1, paddingTop: "65%", marginBottom: this.state.paddingB }}>
          <View>
            {renderItems()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
CustomList.defaultProps = {
  data: [],
  renderItem: item => { },
  selectedEvent: item => { }
};
CustomList.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  selectedEvent: PropTypes.func
};
CustomList.styles = StyleSheet.create({});
