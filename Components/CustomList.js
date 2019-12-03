import React from "react";
import { View, StyleSheet, ScrollView,Dimensions } from "react-native";
import PropTypes from "prop-types";
import CustomScrollItem from "./CustomScrollItem";
let ScreenHeight = Dimensions.get("window").height + 40;

let _scrollref;
export default class CustomList extends React.Component {
  constructor(props) {
    super(props);
    this.scrollEvent = this.scrollEvent.bind(this);
    this.state = {
      selectedindex:0,
    };
  }
  componentDidMount() {
    if (this.props.data.length > 0) {
      this.props.selectedEvent(this.props.data[this.state.selectedindex]);
    }
  }
  scrollEvent(event) {
    let selecti = event.nativeEvent.contentOffset.y / 100;
    selecti = Math.round(selecti);
    if (selecti != this.state.selectedindex) {
      this.setState({selectedindex:selecti});
      if (selecti < this.props.data.length) {
        this.props.selectedEvent(this.props.data[selecti])
      }
    }
  }
  render() {
    const renderItems = () => {
      const ListItems = [];
      let index = 0;
      for (let item of this.props.data) {
        ListItems.push(<CustomScrollItem key={index} selectedindex={this.state.selectedindex} index={index}>{this.props.renderItem(item, index)}</CustomScrollItem>);
        index++;
      }
      return ListItems;
    };
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          onMomentumScrollEnd={this.scrollEnd}
          showsVerticalScrollIndicator={false}
          ref={scrollref => { _scrollref = scrollref }}
          contentContainerStyle={{paddingTop: "65%", paddingBottom: ScreenHeight*0.07+"%"}}
          onScroll={this.scrollEvent}
          snapToInterval={100}
          snapToAlignment="center"
          decelerationRate={100}
          style={{ flex: 1 }}>
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
