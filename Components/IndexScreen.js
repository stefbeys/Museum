import React from "react";
import {StyleSheet, View, Text, Image, Dimensions, TouchableHighlight, FlatList} from 'react-native';
import Images from './images'

const dataList = [{img: 'duck1', name:'BlaBla', data:'info about him'}, {img: 'duck2', name:'Bean Goose', data:'info about him'}, {img: 'duck3', name:'Oelala', data:'info about him'}]
let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class IndexScreen extends React.Component {
  //#region listview code
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
      info: ""
    }
  }

  _onPress(item) {
    this.setState({
      img: item.img,
      name: item.name,
      info: item.data
    });
  }
  //#endregion

  render() {
    return(
      <View style={styles.contentContainer}>
          <Image resizeMode={'stretch'} style={styles.c_background} source={require('../assets/BackgroundL.png')}/>
          <View style={styles.c_info}>
            <View style={styles.c_index}> 
            <Image style={styles.c_index__picture_selected} source={Images.ducks[this.state.img]}/>
            <View>
              <Text style={styles.c_index_data__name}>{this.state.name}</Text>
              <Text style={styles.c_index_data__name}>{this.state.info}</Text>
            </View>
            </View>
            
          </View>
          <FlatList data={dataList}
            renderItem={({item, index, separators}) => (
              <TouchableHighlight onPress={() => this._onPress(item)} onShowUnderlay={separators.highlight} onHideUnderlay={separators.unhighlight}>
                <View style={styles.c_index}>
                  <Image style={styles.c_index__picture} source={Images.ducks[item.img]}/>
                  <Text style={styles.c_index_data__name}>{item.name}</Text>
                </View>
              </TouchableHighlight>
            )}
          />
      </View>
    )
  }
}

// #region Stylesheet
const styles = StyleSheet.create({
    c_info:{
      marginTop: 48,
      marginBottom: 124
    },

    c_background:{
      height: ScreenHeight,
      width: ScreenWidth,
      position: 'absolute'
    },

    c_index:{
      margin: 24,
      flex:1,
      flexDirection: 'row'
    },
    

    c_index__picture:{
      height: 88,
      width: 88,
      marginRight: 24,
      borderRadius: 500
    },

    c_index__picture_selected:{
      height: 124,
      width: 124,
      marginRight: 24,
      borderRadius: 500
    },

    c_index_data:{

    },
    c_index_data__name:{
      fontSize:24,
      color: 'white',
    },
    c_index_data__data:{
      color: 'white',
    },
  });
  // #endregion
