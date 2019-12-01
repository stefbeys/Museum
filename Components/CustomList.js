import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { PanGestureHandler } from "react-native-gesture-handler";

let _scrollref;
let scrollpos = 0;
let reallscrolpos = 0;
export default class CustomList extends React.Component {
  constructor(props) {
    super(props);
    this.scrollEvent = this.scrollEvent.bind(this);
    this.PanScrollEvent = this.PanScrollEvent.bind(this);
    this.state = {
      paddingT: 65,
      paddingB: 0,
      canUseScrollbar: false
    };
  }
  scrollEvent(event) {
    if (event.nativeEvent.contentOffset.y == reallscrolpos) {
      scrollpos = reallscrolpos;
      this.setState({
        canUseScrollbar: false
      });
    } else {
      reallscrolpos = event.nativeEvent.contentOffset.y;
    }
  }
  PanScrollEvent(event) {
    if (!this.state.canUseScrollbar) {
      if (this.state.paddingT > 0 && event.nativeEvent.translationY < 0) {
        this.setState({ paddingT: this.state.paddingT - 2 });
      }
      if (this.state.paddingT <= 0 && !this.state.canUseScrollbar) {
        this.setState({ canUseScrollbar: true });
      }
    }
    if (this.state.canUseScrollbar && event.nativeEvent.translationY < 0) {
      scrollpos += 5;
      _scrollref.scrollTo({ y: scrollpos });
    }
    console.log(!this.state.canUseScrollbar);
    if (
      !this.state.canUseScrollbar &&
      scrollpos > 0 &&
      event.nativeEvent.translationY < 0 &&
      this.state.paddingB < 60
    ) {
      this.setState({ paddingB: this.state.paddingB + 2 });
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
      // <PanGestureHandler
      //   onGestureEvent={this.PanScrollEvent}
      //   style={{ flex: 1, backgroundColor: "#0f0" }}
      // >
      <View style={{flex:1,paddingTop:250,paddingBottom:250,overflow:"visible"}}>
        <ScrollView
          ref={scrollRef => (_scrollref = scrollRef)}
          decelerationRate={0}
          snapToInterval={100}
          snapToAlignment="center"
          scrollEnabled={true}
          onScroll={this.scrollEvent}
          style={{
            flex: 1,
            marginBottom: this.state.paddingB + "%"
          }}
        >
          {renderItems()}
        </ScrollView>
      </View>
      // </PanGestureHandler>
    );
  }
}
CustomList.defaultProps = {
  data: [],
  renderItem: item => {}
};
CustomList.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func
};
CustomList.styles = StyleSheet.create({});
