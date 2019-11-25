import React from "react";
import { StyleSheet, View, Image, Dimensions, Text, TouchableHighlight, ListView} from 'react-native';
import Images from './images'

const dataList = [{img: 'duck1', name:'BlaBla', data:'info about him'}, {img: 'duck2', name:'Bean Goose', data:'info about him'}, {img: 'duck3', name:'Oelala', data:'info about him'}]
let ScreenHeight = Dimensions.get("window").height + 82;
let ScreenWidth = Dimensions.get("window").width;

export default class StoreScreen extends React.Component {
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
          <View style={styles.c_points_container}>
            <Text style={styles.c_points_amount}>800</Text>
            <Text style={styles.c_points_pts}>Pts</Text>
          </View>
          {/* <ListView dataSource = {this.state.dataSource} renderRow = {this._renderRow.bind(this)}/> */}
      </View>
    )
  }
}

// #region Stylesheet
const styles = StyleSheet.create({
  c_points_container:{
    flex: 1,
    flexDirection: 'row',
    margin: 80,
    height: 200,
    backgroundColor: 'red',
    width: ScreenWidth
  },
  c_points_amount:{
    fontSize:72,
    color:'white'
  },
  c_points_pts:{
    color: 'white',
    fontSize: 24
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