import React from "react";
import {Platform, SectionList, StyleSheet, View, Text, Image, Dimensions, ListView, TouchableHighlight} from 'react-native';
import Images from './images'

const dataList = [{img: 'duck1', name:'BlaBla', data:'info about him'}, {img: 'duck2', name:'Bean Goose', data:'info about him'}, {img: 'duck3', name:'Oelala', data:'info about him'}]
let selectedImg = null;
let selectedName = null;
let selectedData = null;
let ScreenHeight = Dimensions.get("window").height+40;
let ScreenWidth = Dimensions.get("window").width;

export default class IndexScreen extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: dataList,
      dataSource: ds,
    }
  }
  
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(dataList)
    });
  }

  _renderRow(rowData,sectionID, rowID) {
    return (
      <TouchableHighlight onPress={this._onPressRow.bind(this.rowID, rowData)}>
        <View style={styles.c_index}>
          <Image style={styles.c_index__picture} source={Images.ducks[rowData.img]}/>
          <Text style={styles.c_index_data__name}>{rowData.name}</Text>
          <Text style={styles.c_index_data__data}>{rowID}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onPressRow(rowID, rowData) {
    // let dataClone = dataList;
    // console.warn(rowID)
    // dataClone[rowID] = rowData;
    this.setState({
      dataSource: rowID,
      data: rowID
    });
  }


  render() {
    return(
      <View style={styles.contentContainer}>
          <Image resizeMode={'stretch'} style={styles.c_background} source={require('../assets/BackgroundL.png')}/>
          <View style={styles.c_info}>
            <View style={styles.c_index}> 
            <Image style={styles.c_index__picture_selected} source={selectedImg}/>
            <View>
              <Text style={styles.c_index_data__name}>{this.state.name}</Text>
              <Text style={styles.c_index_data__name}>{selectedData}</Text>
            </View>
            </View>
            
          </View>
          <ListView dataSource = {this.state.dataSource} renderRow = {this._renderRow.bind(this)}/>
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
      marginRight: 24
    },

    c_index__picture_selected:{
      height: 124,
      width: 124,
      marginRight: 24
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
